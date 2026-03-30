// src/api/enquiry.js

const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

console.log("[API] Base URL:", BASE);

async function post(path, body) {
  const url = `${BASE}${path}`;

  console.log(`[API] ➡️  POST ${url}`);
  console.log("[API] Request body:", body);

  let res;
  try {
    res = await fetch(url, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(body),
    });
  } catch (networkErr) {
    // Fires when server is unreachable — wrong URL, server down, or CORS preflight blocked
    console.error(`[API] ❌ Network error on POST ${url}`);
    console.error("[API] Is your backend running? Is VITE_API_URL correct in your .env?");
    console.error("[API] Network error details:", networkErr);
    throw new Error("Cannot reach the server. Check your backend is running.");
  }

  console.log(`[API] ⬅️  Status: ${res.status} ${res.statusText}`);

  let data;
  try {
    data = await res.json();
    console.log("[API] Response data:", data);
  } catch (parseErr) {
    console.error("[API] ❌ Failed to parse response as JSON");
    console.error("[API] This usually means the backend crashed or returned an HTML error page");
    console.error("[API] Raw response object:", res);
    console.error("[API] Parse error:", parseErr);
    throw new Error("Server returned an invalid response (not JSON).");
  }

  if (!res.ok) {
    console.error(`[API] ❌ Request failed — HTTP ${res.status}`);
    console.error("[API] Error response body:", data);
    if (data.errors) {
      console.error("[API] Validation errors:", data.errors);
    }
    throw Object.assign(new Error(data.message || "Request failed"), { data });
  }

  console.log(`[API] ✅ POST ${url} succeeded`);
  return data;
}

export const submitEnquiry = (payload) => {
  console.log("[API] submitEnquiry called with:", payload);
  return post("/api/enquiry/submit", payload);
};

export const verifyOTP = (payload) => {
  console.log("[API] verifyOTP called with:", payload);
  return post("/api/enquiry/verify-otp", payload);
};

export const resendOTP = (payload) => {
  console.log("[API] resendOTP called with:", payload);
  return post("/api/enquiry/resend-otp", payload);
};