const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const SMS_FROM = process.env.TWILIO_SMS_FROM;  // +12602613083 — regular number, no sandbox
const WA_FROM  = process.env.TWILIO_WA_FROM;   // whatsapp:+14155238886
const OWNER    = process.env.OWNER_WHATSAPP;   // whatsapp:+918800833424

// ── E.164 helper ─────────────────────────────────────────────────
function toE164(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("91") ? `+${digits}` : `+91${digits}`;
}

// ── WhatsApp number helper ────────────────────────────────────────
function waNumber(phone) {
  return `whatsapp:${toE164(phone)}`;
}

// ── SMS sender ────────────────────────────────────────────────────
async function sendSMS(to, body) {
  try {
    const msg = await client.messages.create({ from: SMS_FROM, to, body });
    return { success: true, sid: msg.sid };
  } catch (err) {
    console.error("[SMS] send failed:", err.message);
    return { success: false, error: err.message };
  }
}

// ── WhatsApp sender ───────────────────────────────────────────────
async function sendWA(to, body) {
  try {
    const msg = await client.messages.create({ from: WA_FROM, to, body });
    return { success: true, sid: msg.sid };
  } catch (err) {
    console.error("[WhatsApp] send failed:", err.message);
    return { success: false, error: err.message };
  }
}

// ════════════════════════════════════════════════════════════════
//  1. OTP → student via SMS (no sandbox needed)
//     Function name same rakha — enquiry.js mein kuch nahi badlega
// ════════════════════════════════════════════════════════════════
async function sendOTPWhatsApp({ phone, name, otp, expiryMinutes = 10 }) {
  const body =
    `Edura Institute OTP: ${otp}\n` +
    `Hi ${name}, valid for ${expiryMinutes} min.\n` +
    `Do not share. - Team Edura`;

  return sendSMS(toE164(phone), body);
}

// ════════════════════════════════════════════════════════════════
//  2. Owner notification → WhatsApp (sandbox — owner ka number joined hai)
// ════════════════════════════════════════════════════════════════
async function sendOwnerWhatsApp(enquiry) {
  const { name, phone, course, email, message, formType } = enquiry;
  const formLabel = formType === "demo" ? "Book Free Demo" : "Enquiry Form";
  const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const body = `
🔔 *New Lead — Edura Institute*
Form: *${formLabel}*
Time: ${time}

👤 *Name:*   ${name}
📱 *Phone:*  ${phone}
📚 *Course:* ${course}${email   ? `\n✉️  *Email:*  ${email}`   : ""}${message ? `\n💬 *Note:*   ${message}` : ""}

📞 Call: https://wa.me/${phone.replace(/\D/g, "")}`.trim();

  return sendWA(OWNER, body);
}

// ════════════════════════════════════════════════════════════════
//  3. Student confirmation → WhatsApp
//     Trial mein sirf sandbox-joined numbers pe jayega
//     Production mein sab pe jayega
// ════════════════════════════════════════════════════════════════
async function sendStudentWhatsApp(enquiry) {
  const { name, phone, course, formType } = enquiry;
  const isDemo = formType === "demo";

  const body = `
✅ *${isDemo ? "Demo Class Booked" : "Enquiry Received"} — Edura Institute*

Hi *${name}*! 👋

${isDemo
    ? `Your *Free Demo Class* for *${course}* has been booked.`
    : `We've received your enquiry for *${course}*.`}

Our counsellor will call you within *24 hours*.

📍 South Delhi
📞 +91 99999 12345

_Zero obligation — just clarity!_ 🎓`.trim();

  return sendWA(waNumber(phone), body);
}

module.exports = { sendOTPWhatsApp, sendOwnerWhatsApp, sendStudentWhatsApp };