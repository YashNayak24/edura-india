# Edura Next.js

Full-stack Next.js App Router migration of the existing Edura frontend and backend. The original `frontend` and `backend` directories remain unchanged.

## Local setup

1. Copy `.env.example` to `.env.local` and fill the production credentials.
2. Run `npm install`.
3. Run `npm run dev` for development or `npm run build && npm start` for production.

The site keeps the existing public routes and exposes the existing course, enquiry, OTP, sitemap and robots endpoints from the same Next.js deployment.
