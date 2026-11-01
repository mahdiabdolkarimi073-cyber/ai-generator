# Project memory

## Product intent & audience

- Full-stack Next.js web app; product purpose not yet defined by user.
- Target audience: Persian/Farsi-speaking users (RTL UI, Persian content).
- User communicates in Persian; responses should remain in Persian.

## Brand personality & voice

- Professional yet approachable Persian-language product.
- Tone: polished, production-grade, "beautiful, not cookie-cutter."
- Copy uses Persian numerals and natural Persian phrasing.

## Visual design & UX direction

- **Direction:** RTL layout (`dir="rtl"`, `lang="fa"`), Persian font (Vazirmatn), rich multi-section landing page.
- **Color system:** 8-token palette in Tailwind config — primary, secondary, accent, success, warning, error, info, neutral — with dark-mode variants.
- **Aesthetics:** layered gradients, grid/noise backgrounds, glow/float/fade-in animations; glassmorphism accents.
- **Home page sections:** sticky header w/ logo + nav, hero w/ CTA buttons + trust badge, stats bar, 6-card features grid (hover effects), 3-step "how it works", 3-tier pricing, FAQ accordion, gradient CTA band, full footer.
- **Responsiveness:** mobile-first, fully responsive across breakpoints.
- **Tech:** Next.js App Router, Tailwind CSS, shadcn/ui, lucide-react icons, Supabase (client + server helpers in `lib/supabase/`).
- **Patterns:** graceful fallback for missing env vars at build time; `metadataBase` set to avoid warnings.

## Decisions, constraints & rationale

- Supabase client split into browser (`lib/supabase/client.ts`) and server (`lib/supabase/server.ts`) variants for App Router compatibility.
- env vars managed by Bolt — not set manually.
- Build verified passing after initial setup.
- Global styles and RTL/Persian font configured in `globals.css` and root layout.

## Open questions & assumptions

- **Core product purpose still undefined** — user hasn't specified what the app does; next features (auth, dashboard, etc.) await clarification.
- Assuming Supabase Auth will be used for user login/registration (offered as next step).
- Assuming landing-page copy is placeholder until product domain is clarified.