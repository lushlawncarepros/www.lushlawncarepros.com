# Lush Technical Memory

## Premium Sieve Rules
**Policy:** Minimum Investment Expectation & Weekly Exclusivity

**Logic:**
1.  **Weekly Filter**: Bi-weekly requests trigger a soft-filter stating Lush focuses exclusively on Weekly Precision. Instead of rejecting the lead immediately, it sets the boundary so users self-select out if they truly don't want weekly service.
2.  **Budget Minimum**: The system qualifies leads by presenting a baseline premium standard: Lush provides an all-inclusive maintenance experience with a minimum precision visit investment of `$40`. The specific company man-hour rate calculation is hidden to preserve UX, and declining provides a cordial exit message.
3.  **Waitlist Protocol**: If an out-of-bounds address is entered, the protocol gracefully intercepts and explicitly offers an exclusive waitlist sign-up: *"Unfortunately, we don't have availability on our precision route in your neighborhood at the moment. However, you can join our exclusive waitlist below, and we will notify you the second a spot opens up in your area."*

## Visual Identity & Hierarchy
**Policy:** Brand Recognition & Focal CTAs

**Logic:**
1.  **Logo Placement**: The header immediately enforces brand recognition via `lush-logo.png` integrated into a dedicated centered section at the absolute top of the page, ensuring `mb-8` clearance to protect the headline on mobile views.
2.  **Color Swap**: The primary call-to-actions ("Get Free Quote", "Confirm Quote") utilize high-vibrancy green (`#39B54A`) styling to create immediate visual hierarchy. The "Iron-Clad Guarantee" section sets a `bg-gradient-to-br from-gray-900 to-gray-800` background to match the professional Motivated Pros block, while its prominent badge sits perfectly matched in `#39B54A`.
3.  **The Upsell Engine**: The 'Complete Your Property Harmony' feature box permanently displays the Additional Services menu. The `[+]` toggle was removed to ensure the premium upgrades list is presented as an integrated part of the core form.

## Storage Retention Rule
**Policy:** 30-Day Auto-Delete Lifecycle Policy (APPLIED)

**Logic:** A Google Cloud Lifecycle Management policy has been successfully applied to the `lush-website-2026.firebasestorage.app` storage bucket. Files in `artifacts/lush-website-2026/public/data/leads/` will be automatically purged after 30 days to prevent storage bloat.

## Visual Progress Pulse
**Policy:** Resumable Uploads for Large Files

**Logic:** Replaced standard binary uploads with Firebase `uploadBytesResumable` to ensure safe transmission for huge video/photo structures without hitting timeouts or crashing the process. Progress spans seamlessly across iterative byte mappings.

## Auto-Scroll UX
**Policy:** Smooth Navigation Post-Submit (Center Strategy)

**Logic:** An injected `useRef` element pairs with `useEffect()` to lock onto the Success/Waitlist component mount event. Once the step updates, the screen automatically forces a `scrollIntoView({ behavior: 'smooth', block: 'center' })` trigger for mobile legibility, targeting the center of the screen to isolate the success message.

## Social Proof Integrity
**Policy:** Legacy Testimonial Migration

**Logic:** The official, verified block of legacy customer reviews (Diane M., Carolyn J., Heather A., Sara C.) has been permanently integrated into the core `page.tsx` hierarchy, acting as a direct conversion anchor right before the Iron-Clad Guarantee. For client privacy, these reviews now utilize the **'First Name + Last Initial'** standard. Furthermore, a direct link to the verified Google Business Profile (`https://share.google/HcZTXSe6UQaucbm4u`) is included below the testimonials grid to establish third-party verification and transparency.

## AI Concierge Integration
**Policy:** SEO-Optimized Botpress Webchat & Gatekeeper Modal Tracking

**Logic:** The Botpress Webchat ("Lush AI Concierge") is integrated with a strict 3-second `setTimeout` delay on its `init` parameters via `BotpressWidget.tsx`. This avoids blocking the main thread and protects Core Web Vitals. The widget is localized to the Emerald-500 palette (`#39B54A`), loaded using standard Botpress config routing, and conditionally hidden via global CSS tracking the `gatekeeper-open` class when the lead capture modal is open.
