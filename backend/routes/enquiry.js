// routes/enquiry.js
const express  = require("express");
const router   = express.Router();

const Enquiry  = require("../models/Enquiry");
const { generateOTP, hashOTP, verifyOTP, expiryDate } = require("../services/otpService");
const { sendOTPEmail, sendOwnerNotificationEmail, sendStudentConfirmationEmail } = require("../services/emailService");
const { sendOwnerWhatsApp, sendStudentWhatsApp } = require("../services/whatsappService");
const { validateEnquiry, validateOTPVerify } = require("../middleware/validate");

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1  POST /api/enquiry/submit
// ─────────────────────────────────────────────────────────────────────────────
router.post("/submit", validateEnquiry, async (req, res) => {
  try {
    console.log("[/submit] ✅ Route hit");
    console.log("[/submit] Body:", req.body);

    const { formType, name, phone, course, email = null, message = null } = req.body;

    // Email is required — OTP only goes via email
    if (!email) {
      return res.status(422).json({
        success: false,
        message: "Email is required to receive OTP.",
      });
    }

    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    console.log("[/submit] Clean phone:", cleanPhone);

    // ── Step 1: Save to MongoDB ──────────────────────────────────────────────
    console.log("[/submit] Saving to MongoDB...");
    const enquiry = await Enquiry.create({
      formType,
      name:    name.trim(),
      phone:   cleanPhone,
      course:  course.trim(),
      email:   email.trim().toLowerCase(),
      message: message ? message.trim() : null,
      status:  "pending_otp",
    });
    console.log("[/submit] ✅ Saved to MongoDB. ID:", enquiry._id);

    // ── Step 2: Generate OTP ─────────────────────────────────────────────────
    const otp    = generateOTP();
    const expiry = expiryDate();
    console.log("[/submit] Generated OTP:", otp, "| Expiry:", expiry);

    enquiry.otp       = hashOTP(otp);
    enquiry.otpExpiry = expiry;
    await enquiry.save();
    console.log("[/submit] ✅ OTP hash saved to DB");

    const expiryMinutes = parseInt(process.env.OTP_EXPIRY_MINUTES) || 10;

    // ── Step 3: Send OTP via Email only ──────────────────────────────────────
    console.log("[/submit] Sending Email OTP to:", email);
    await sendOTPEmail({ to: email.trim(), name: name.trim(), otp, expiryMinutes })
      .then(()  => console.log("[/submit] ✅ Email OTP sent"))
      .catch((e) => console.error("[/submit] ❌ Email OTP FAILED:", e.message));

    // ── Step 4: Respond ──────────────────────────────────────────────────────
    console.log("[/submit] Sending 201 response...");
    return res.status(201).json({
      success:   true,
      enquiryId: enquiry._id,
      message:   "OTP sent to your email. Please verify to complete.",
      ...(process.env.NODE_ENV === "development" && { __dev_otp: otp }),
    });

  } catch (err) {
    console.error("[/submit] ❌ ERROR:", err.message);
    console.error("[/submit] Stack:", err.stack);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2  POST /api/enquiry/resend-otp
// ─────────────────────────────────────────────────────────────────────────────
router.post("/resend-otp", async (req, res) => {
  try {
    console.log("[/resend-otp] Hit. Body:", req.body);

    const { enquiryId } = req.body;
    if (!enquiryId)
      return res.status(422).json({ success: false, message: "enquiryId required" });

    const enquiry = await Enquiry.findById(enquiryId);
    if (!enquiry)
      return res.status(404).json({ success: false, message: "Enquiry not found" });

    if (enquiry.otpVerified)
      return res.status(400).json({ success: false, message: "Already verified" });

    const cooldownMs = 2 * 60 * 1000;
    if (enquiry.otpExpiry && enquiry.otpExpiry - Date.now() > (parseInt(process.env.OTP_EXPIRY_MINUTES || 10) * 60 * 1000 - cooldownMs)) {
      console.log("[/resend-otp] Throttled — too soon");
      return res.status(429).json({ success: false, message: "Please wait 2 minutes before requesting a new OTP" });
    }

    const otp           = generateOTP();
    const expiryMinutes = parseInt(process.env.OTP_EXPIRY_MINUTES) || 10;
    enquiry.otp         = hashOTP(otp);
    enquiry.otpExpiry   = expiryDate();
    await enquiry.save();
    console.log("[/resend-otp] ✅ New OTP generated:", otp);

    // OTP only via email
    await sendOTPEmail({ to: enquiry.email, name: enquiry.name, otp, expiryMinutes })
      .then(()  => console.log("[/resend-otp] ✅ Email OTP sent"))
      .catch((e) => console.error("[/resend-otp] ❌ Email OTP failed:", e.message));

    return res.json({
      success: true,
      message: "New OTP sent to your email.",
      ...(process.env.NODE_ENV === "development" && { __dev_otp: otp }),
    });

  } catch (err) {
    console.error("[/resend-otp] ❌ ERROR:", err.message);
    console.error("[/resend-otp] Stack:", err.stack);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3  POST /api/enquiry/verify-otp
// ─────────────────────────────────────────────────────────────────────────────
router.post("/verify-otp", validateOTPVerify, async (req, res) => {
  try {
    console.log("[/verify-otp] Hit. Body:", req.body);

    const { enquiryId, otp } = req.body;

    const enquiry = await Enquiry.findById(enquiryId);
    if (!enquiry)
      return res.status(404).json({ success: false, message: "Enquiry not found" });

    if (enquiry.otpVerified)
      return res.status(400).json({ success: false, message: "Already verified" });

    if (!enquiry.otpExpiry || Date.now() > new Date(enquiry.otpExpiry).getTime()) {
      console.log("[/verify-otp] OTP expired");
      enquiry.status = "failed";
      await enquiry.save();
      return res.status(400).json({ success: false, message: "OTP expired. Please request a new one." });
    }

    let valid = false;
    try { valid = verifyOTP(otp, enquiry.otp); } catch (_) { valid = false; }
    console.log("[/verify-otp] OTP valid?", valid);

    if (!valid)
      return res.status(400).json({ success: false, message: "Invalid OTP. Please try again." });

    enquiry.otpVerified = true;
    enquiry.status      = "verified";
    enquiry.otp         = null;
    enquiry.otpExpiry   = null;
    await enquiry.save();
    console.log("[/verify-otp] ✅ Marked verified in DB");

    // ── Fire all lead notifications (email + WhatsApp both) ──────────────────
    console.log("[/verify-otp] Firing lead notifications...");
    const [ownerWA, ownerEmail, studentWA, studentEmail] = await Promise.allSettled([
      // Owner WhatsApp (Twilio)
      sendOwnerWhatsApp(enquiry)
        .then(()  => console.log("[/verify-otp] ✅ Owner WhatsApp sent"))
        .catch((e) => console.error("[/verify-otp] ❌ Owner WhatsApp failed:", e.message)),
      // Owner Email
      sendOwnerNotificationEmail(enquiry)
        .then(()  => console.log("[/verify-otp] ✅ Owner Email sent"))
        .catch((e) => console.error("[/verify-otp] ❌ Owner Email failed:", e.message)),
      // Student WhatsApp (Twilio)
      sendStudentWhatsApp(enquiry)
        .then(()  => console.log("[/verify-otp] ✅ Student WhatsApp sent"))
        .catch((e) => console.error("[/verify-otp] ❌ Student WhatsApp failed:", e.message)),
      // Student confirmation email
      sendStudentConfirmationEmail(enquiry)
        .then(()  => console.log("[/verify-otp] ✅ Student Email sent"))
        .catch((e) => console.error("[/verify-otp] ❌ Student Email failed:", e.message)),
    ]);

    enquiry.notified = {
      ownerWhatsApp:   ownerWA.status    === "fulfilled" && ownerWA.value?.success    !== false,
      ownerEmail:      ownerEmail.status === "fulfilled",
      studentWhatsApp: studentWA.status  === "fulfilled" && studentWA.value?.success  !== false,
      studentEmail:    studentEmail.status === "fulfilled",
    };
    await enquiry.save();
    console.log("[/verify-otp] Notification results:", enquiry.notified);

    return res.json({
      success: true,
      message: "Verified! Our counsellor will contact you within 24 hours.",
      notifications: enquiry.notified,
    });

  } catch (err) {
    console.error("[/verify-otp] ❌ ERROR:", err.message);
    console.error("[/verify-otp] Stack:", err.stack);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// ADMIN  GET /api/enquiry/all
// ─────────────────────────────────────────────────────────────────────────────
router.get("/all", async (req, res) => {
  try {
    const { formType, status, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (formType) filter.formType = formType;
    if (status)   filter.status   = status;

    const enquiries = await Enquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select("-otp")
      .lean(); 
      
    const total = await Enquiry.countDocuments(filter);
    res.json({ success: true, total, page: parseInt(page), data: enquiries });
  } catch (err) {
    console.error("[/all] ❌ ERROR:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;