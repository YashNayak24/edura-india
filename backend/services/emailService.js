// services/emailService.js
const { Resend } = require("resend");

// ── Debug helper ─────────────────────────────────────────────────────────────
function log(tag, msg, data) {
  const time = new Date().toISOString();
  if (data !== undefined) {
    console.log(`[EMAIL][${tag}] ${time} — ${msg}`, data);
  } else {
    console.log(`[EMAIL][${tag}] ${time} — ${msg}`);
  }
}

// ── Resend client ─────────────────────────────────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY);

// ── Log config on startup ────────────────────────────────────────────────────
log("CONFIG", "Resend config loaded", {
  apiKey:     process.env.RESEND_API_KEY ? "SET ✅" : "NOT SET ❌",
  from:       process.env.EMAIL_FROM     || "onboarding@resend.dev (default)",
  ownerEmail: process.env.OWNER_EMAIL    || "NOT SET ❌",
});

// ── FROM address ─────────────────────────────────────────────────────────────
// Jab tak domain verify nahi → onboarding@resend.dev
// Domain verify hone ke baad → EMAIL_FROM=noreply@eduraindia.com set karo
const FROM = process.env.EMAIL_FROM
  ? `"Edura Institute" <${process.env.EMAIL_FROM}>`
  : "Edura Institute <onboarding@resend.dev>";

// ════════════════════════════════════════════════════════════════════════════
//  1.  OTP EMAIL
// ════════════════════════════════════════════════════════════════════════════
async function sendOTPEmail({ to, name, otp, expiryMinutes = 10 }) {
  log("OTP", `📤 Attempting to send OTP email`, { to, name, otp, expiryMinutes });

  const html = `
  <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:linear-gradient(135deg,#073E75,#0A5FAD);padding:28px 32px 22px">
      <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;letter-spacing:-.02em">Edura Institute</h1>
      <p style="color:rgba(255,255,255,.7);margin:4px 0 0;font-size:13px">Verify your email address</p>
    </div>
    <div style="padding:32px">
      <p style="margin:0 0 6px;font-size:15px;color:#0f172a;font-weight:600">Hi ${name},</p>
      <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.6">
        Use the OTP below to complete your enquiry. It expires in <strong>${expiryMinutes} minutes</strong>.
      </p>
      <div style="background:#f8fafc;border:2px dashed #094E93;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px">
        <div style="font-size:36px;font-weight:900;letter-spacing:12px;color:#094E93;font-family:'Courier New',monospace">${otp}</div>
        <p style="margin:8px 0 0;font-size:12px;color:#94a3b8">Do not share this OTP with anyone</p>
      </div>
      <p style="font-size:12px;color:#94a3b8;margin:0">If you didn't request this, please ignore this email.</p>
    </div>
    <div style="background:#f8fafc;padding:14px 32px;text-align:center;font-size:11px;color:#94a3b8">
      © ${new Date().getFullYear()} Edura Institute · Kalkaji, New Delhi
    </div>
  </div>`;

  try {
    const start = Date.now();
    const { data, error } = await resend.emails.send({
      from:    FROM,
      to,
      subject: `${otp} — Your Edura OTP`,
      html,
    });
    if (error) { log("OTP", `❌ FAILED`, { error: error.message, to }); throw new Error(error.message); }
    log("OTP", `✅ SENT in ${Date.now() - start}ms`, { id: data.id, to });
    return data;
  } catch (err) {
    log("OTP", `❌ ERROR`, { error: err.message, to });
    throw err;
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  2.  OWNER NOTIFICATION EMAIL
// ════════════════════════════════════════════════════════════════════════════
async function sendOwnerNotificationEmail(enquiry) {
  const { name, phone, course, email, message, formType, createdAt } = enquiry;
  log("OWNER", `📤 Sending owner notification`, { to: process.env.OWNER_EMAIL, name, course });

  const formLabel = formType === "popup" ? "Enquiry Popup" : "Book Free Demo";
  const time = new Date(createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const rows = [
    ["Name",    name],
    ["Phone",   phone],
    ["Course",  course],
    ...(email   ? [["Email",   email]]   : []),
    ...(message ? [["Message", message]] : []),
    ["Form",    formLabel],
    ["Time",    time],
  ];

  const tableRows = rows
    .map(([k, v]) => `
      <tr>
        <td style="padding:9px 14px;font-size:13px;font-weight:600;color:#5A6A8A;background:#f8fafc;border-bottom:1px solid #e2e8f0;white-space:nowrap">${k}</td>
        <td style="padding:9px 14px;font-size:13px;color:#0D1E42;border-bottom:1px solid #e2e8f0">${v}</td>
      </tr>`)
    .join("");

  const html = `
  <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:linear-gradient(135deg,#073E75,#0A5FAD);padding:28px 32px 22px">
      <h1 style="color:#fff;margin:0;font-size:20px;font-weight:800">🔔 New Lead — ${formLabel}</h1>
      <p style="color:rgba(255,255,255,.7);margin:4px 0 0;font-size:13px">Edura Institute · ${time}</p>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
        ${tableRows}
      </table>
      <div style="margin-top:20px;text-align:center">
        <a href="tel:${phone}" style="display:inline-block;background:linear-gradient(135deg,#073E75,#0A5FAD);color:#fff;text-decoration:none;padding:11px 28px;border-radius:10px;font-weight:700;font-size:13px">
          📞 Call ${name}
        </a>
      </div>
    </div>
    <div style="background:#f8fafc;padding:14px 32px;text-align:center;font-size:11px;color:#94a3b8">
      © ${new Date().getFullYear()} Edura Institute
    </div>
  </div>`;

  try {
    const start = Date.now();
    const { data, error } = await resend.emails.send({
      from:    FROM,
      to:      process.env.OWNER_EMAIL,
      subject: `🎓 New ${formLabel} Lead — ${name} (${course})`,
      html,
    });
    if (error) { log("OWNER", `❌ FAILED`, { error: error.message }); throw new Error(error.message); }
    log("OWNER", `✅ SENT in ${Date.now() - start}ms`, { id: data.id });
    return data;
  } catch (err) {
    log("OWNER", `❌ ERROR`, { error: err.message });
    throw err;
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  3.  STUDENT CONFIRMATION EMAIL
// ════════════════════════════════════════════════════════════════════════════
async function sendStudentConfirmationEmail(enquiry) {
  if (!enquiry.email) {
    log("STUDENT", "⏭️  Skipping — no email on this enquiry");
    return;
  }

  const { name, course, email, formType } = enquiry;
  log("STUDENT", `📤 Sending student confirmation`, { to: email, name, course });

  const isDemo = formType === "demo";

  const html = `
  <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:linear-gradient(135deg,#073E75,#0A5FAD);padding:28px 32px 22px">
      <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">Edura Institute</h1>
      <p style="color:rgba(255,255,255,.7);margin:4px 0 0;font-size:13px">
        ${isDemo ? "Your free demo class is booked!" : "We've received your enquiry!"}
      </p>
    </div>
    <div style="padding:32px">
      <p style="margin:0 0 8px;font-size:16px;color:#0f172a;font-weight:700">Hi ${name}! 👋</p>
      <p style="margin:0 0 20px;font-size:14px;color:#475569;line-height:1.7">
        ${isDemo
          ? `Thank you for booking a <strong>Free Demo Class</strong> for <strong>${course}</strong>. Our counsellor will call you within <strong>24 hours</strong> to confirm your slot.`
          : `Thank you for enquiring about <strong>${course}</strong>. Our counsellor will reach out within <strong>24 hours</strong> to guide you.`}
      </p>
      <div style="background:#EBF1FF;border-left:4px solid #094E93;border-radius:8px;padding:16px 18px;margin-bottom:24px">
        <p style="margin:0;font-size:13px;font-weight:700;color:#094E93;margin-bottom:6px">What happens next?</p>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:#334155;line-height:2">
          <li>Our academic counsellor will call you</li>
          <li>We'll share the course curriculum & fees</li>
          ${isDemo ? "<li>Your demo class time will be confirmed</li>" : ""}
          <li>Zero obligation — just clarity!</li>
        </ul>
      </div>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 18px;margin-bottom:20px">
        <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Your Enquiry Details</p>
        <p style="margin:0;font-size:13px;color:#0D1E42"><strong>Course:</strong> ${course}</p>
      </div>
      <p style="font-size:13px;color:#475569;margin:0 0 4px">📍 <strong>Kalkaji, New Delhi</strong> · <strong>Nirman Vihar, East Delhi</strong></p>
      <p style="font-size:13px;color:#475569;margin:0">📞 <a href="tel:+919999912345" style="color:#094E93;font-weight:600">+91 99999 12345</a></p>
    </div>
    <div style="background:linear-gradient(135deg,#073E75,#0A5FAD);padding:16px 32px;text-align:center">
      <p style="color:rgba(255,255,255,.8);font-size:12px;margin:0">© ${new Date().getFullYear()} Edura Institute · Kalkaji, New Delhi – 110019</p>
    </div>
  </div>`;

  try {
    const start = Date.now();
    const { data, error } = await resend.emails.send({
      from:    FROM,
      to:      email,
      subject: isDemo
        ? `🎓 Demo Class Booked — ${course} | Edura Institute`
        : `✅ Enquiry Received — ${course} | Edura Institute`,
      html,
    });
    if (error) { log("STUDENT", `❌ FAILED`, { error: error.message }); throw new Error(error.message); }
    log("STUDENT", `✅ SENT in ${Date.now() - start}ms`, { id: data.id });
    return data;
  } catch (err) {
    log("STUDENT", `❌ ERROR`, { error: err.message });
    throw err;
  }
}

module.exports = { sendOTPEmail, sendOwnerNotificationEmail, sendStudentConfirmationEmail };