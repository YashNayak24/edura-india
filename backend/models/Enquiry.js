// models/Enquiry.js
const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    /* ── common fields ── */
    formType: {
      type: String,
      enum: ["popup", "demo"],   // popup = EnquiryPopup | demo = Book Free Demo
      required: true,
    },
    name:   { type: String, required: true, trim: true },
    phone:  { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },

    /* ── demo-form only ── */
    email:   { type: String, trim: true, lowercase: true, default: null },
    message: { type: String, trim: true, default: null },

    /* ── OTP verification ── */
    otp:           { type: String, default: null },      // hashed OTP stored here
    otpExpiry:     { type: Date,   default: null },
    otpVerified:   { type: Boolean, default: false },

    /* ── notifications sent ── */
    notified: {
      ownerEmail:     { type: Boolean, default: false },
      ownerWhatsApp:  { type: Boolean, default: false },
      studentEmail:   { type: Boolean, default: false },  // only demo form has email
      studentWhatsApp:{ type: Boolean, default: false },
    },

    status: {
      type: String,
      enum: ["pending_otp", "verified", "failed"],
      default: "pending_otp",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);