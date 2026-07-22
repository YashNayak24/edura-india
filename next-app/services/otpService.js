// services/otpService.js
const crypto = require("crypto");

const OTP_DIGITS = 6;
const EXPIRY_MS  = (parseInt(process.env.OTP_EXPIRY_MINUTES) || 10) * 60 * 1000;

/** Generate a random numeric OTP string */
function generateOTP() {
  // crypto.randomInt is available in Node ≥ 14.10
  const max = 10 ** OTP_DIGITS;
  const otp = crypto.randomInt(0, max).toString().padStart(OTP_DIGITS, "0");
  return otp;
}

/** Hash the OTP before storing (SHA-256, no salt needed for short-lived codes) */
function hashOTP(otp) {
  return crypto.createHash("sha256").update(otp).digest("hex");
}

/** Verify a plain OTP against the stored hash */
function verifyOTP(plainOtp, storedHash) {
  const hash = hashOTP(plainOtp);
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(storedHash));
}

/** Compute expiry Date from now */
function expiryDate() {
  return new Date(Date.now() + EXPIRY_MS);
}

module.exports = { generateOTP, hashOTP, verifyOTP, expiryDate };