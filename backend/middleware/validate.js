// middleware/validate.js

/** Basic validation for enquiry submission */
function validateEnquiry(req, res, next) {
  const { formType, name, phone, course, email } = req.body;

  const errors = {};

  if (!["popup", "demo"].includes(formType))
    errors.formType = "formType must be 'popup' or 'demo'";

  if (!name || !name.trim())
    errors.name = "Name is required";

  if (!/^\d{10}$/.test((phone || "").replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit mobile number";

  if (!course || !course.trim())
    errors.course = "Course is required";

  // email is required only for the demo form
  if (formType === "demo" && email) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) errors.email = "Enter a valid email address";
  }

  if (Object.keys(errors).length)
    return res.status(422).json({ success: false, errors });

  next();
}

/** Basic validation for OTP verification */
function validateOTPVerify(req, res, next) {
  const { enquiryId, otp } = req.body;

  const errors = {};
  if (!enquiryId) errors.enquiryId = "enquiryId is required";
  if (!/^\d{6}$/.test(otp || "")) errors.otp = "OTP must be 6 digits";

  if (Object.keys(errors).length)
    return res.status(422).json({ success: false, errors });

  next();
}

module.exports = { validateEnquiry, validateOTPVerify };    