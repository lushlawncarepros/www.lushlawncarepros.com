# Objective
Hardening SEO for Lush Lawn Pros 2026 by adding specific metadata to the homepage and updating the Services Hub metadata to include "Treasure Valley" and specific service keywords.

# Proposed File Tree
- [MODIFY] `src/app/page.tsx`
- [MODIFY] `src/app/services/page.tsx`

# Implementation Logic
1. **Homepage (`src/app/page.tsx`):** Add a `metadata` export constant at the top of the file.
   - Title: `Lush Lawn Pros | Boise & Meridian Lawn Care`
   - Description: `Premium weekly lawn care in Boise & Meridian, Idaho. Expert mowing, fertilization, aeration, and weed control in the Treasure Valley. Get a free quote today.`
   - Keywords: `["lawn care Boise", "lawn mowing Meridian Idaho", "weekly lawn service Boise", "lawn fertilization Treasure Valley", "Lush Lawn Pros"]`
2. **Services Hub (`src/app/services/page.tsx`):** Update the existing `metadata` export.
   - Update description to: `Premium lawn care services in Boise, Meridian, and the Treasure Valley. Expert weekly mowing, fertilization, aeration, weed control, and seasonal maintenance tailored for Idaho landscapes.`

# Dependencies
- None. (Next.js App Router built-in metadata support)

# Architect Blockers
- None identified. The task is straightforward metadata addition/updates.
