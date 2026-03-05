# Objective
Expand the Shrub Care service page with informative sections, visuals, checklists, and FAQs to position Lush Lawn Pros as species-aware experts versus generic cut-and-run services. Ensure adherence to the premium charcoal/emerald design system.

# Proposed File Tree
- `src/app/services/shrub-care/page.tsx` (Modify)

# Implementation Logic
We will expand `src/app/services/shrub-[care/page.tsx` to include the following new sections inserted **after** the existing 3 cards and **before** the final `CallToAction` component:

1.  **"Before & After" Image Section**:
    -   Create a grid layout with two `Image` components.
    -   Use `/Images/pruners 300 by 200.jpg` for the "In-Action" photo.
    -   Use `/Images/Spring-FallCleanup-e1502466106549.jpg` for the "Results" photo.
    -   Style with rounded corners, shadows, and subtle captions.

2.  **"The Timing Principle" Section**:
    -   Add a dedicated content block explaining why knowing the growth cycle of each shrub species matters (e.g., spring-bloomers vs. fall-bloomers, ornamental grasses).
    -   Use a distinct background color (e.g., `#2D3A42` or an emerald tint) to make it stand out as a core philosophy of Lush.

3.  **"What's Included" Checklist Card**:
    -   Create a highlighted card or section with a list of included services.
    -   Use `CheckCircle2` (from `lucide-react`) for bullet points.
    -   Items: Deciduous shrubs, evergreen hedges, ornamental grasses, rose bushes (light tidy only), removal of dead stems, and crossing branches.

4.  **FAQ Section**:
    -   Construct an FAQ section with the specified questions: "How often are shrubs trimmed?", "Will you trim my roses?", "What if a shrub needs major removal?".
    -   Provide concise, expert-sounding answers for each.

5.  **Final Structural Changes**:
    -   Ensure the `CallToAction` component remains at the very bottom.
    -   Maintain the 2-column mobile to 3-column desktop responsiveness across the page.

# Dependencies
-   `next/image` (already imported)
-   `lucide-react` (add icons: `CheckCircle2`, `Clock`, `HelpCircle`, etc.)
-   Existing `CallToAction` component.

# Architect Blockers
-   Are there any specific copy requirements for the FAQ answers or should I generate expert-level placeholder copy for those? Otherwise, this plan is ready for execution.
