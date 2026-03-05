# Photo Integration Plan — Lush Lawn Pros 2026

## Objective

Wire five real photos from `/public/Images/` into the website using `next/image`. All images will be constrained cards (max 400px wide, `rounded-2xl`, `shadow`) — no full-bleed heroes. No new packages required.

---

## Proposed File Tree

Only existing files are modified. No new files created.

| File | Change |
|---|---|
| `src/app/page.tsx` | Add photo strip between hero and reviews sections |
| `src/app/about/page.tsx` | Add family photo into the "Our Story" section |
| `src/app/services/mowing/page.tsx` | Add mower photo below hero H1/CTA |
| `src/app/services/fertilization/page.tsx` | Add fertilization photo below hero H1/CTA |
| `src/app/services/weed-control/page.tsx` | Add bed weed control photo below hero H1/CTA |

---

## Implementation Logic

### 1. `src/app/page.tsx` — Photo strip between hero & reviews

**Location:** Insert a new `<section>` between the closing `</section>` of the hero (line 49) and the opening `<section id="reviews"` (line 52).

**Markup pattern:**
```tsx
{/* PHOTO STRIP */}
<section className="px-4 pb-8 flex justify-center">
  <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
    <Image
      src="/Images/MowerRideon-300x200.jpg"
      alt="Toro Grandstand mower servicing a Boise residential lawn"
      width={400}
      height={267}
      sizes="(max-width: 640px) 100vw, 400px"
      className="object-cover w-full h-auto"
      priority
    />
  </div>
</section>
```

`Image` is already imported on line 3 of `page.tsx` — no import needed.

---

### 2. `src/app/about/page.tsx` — Family photo in "Our Story"

**Location:** The "Our Story" section card (`<div className="p-8 md:p-14 ...">`) currently contains only an `<h2>` and a `<div className="space-y-6 ...">`.

**Change:** Convert the inner content div to a responsive two-column layout (`md:flex-row`) so the photo sits **beside** the story text on desktop, and **above** it on mobile. The image card is centered when stacked.

```tsx
<div className="p-8 md:p-14 relative z-10">
  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
    Our <span className="text-[#39B54A]">Story</span>
  </h2>
  <div className="flex flex-col md:flex-row gap-10 items-start">
    {/* Photo */}
    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
      <div className="relative w-full max-w-[340px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
        <Image
          src="/Images/Family Picture.jpg"
          alt="Ethan and the Lush Lawn Pros family in Boise Idaho"
          width={340}
          height={255}
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
    {/* Text */}
    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
      {/* existing <p> tags unchanged */}
    </div>
  </div>
</div>
```

`Image` is already imported on line 1 of `about/page.tsx` — no import needed.

---

### 3. `src/app/services/mowing/page.tsx` — Mower photo near hero

**Location:** Insert below the `<CallToAction>` CTA on line 109, still inside the hero `<section>`.

```tsx
<div className="mt-10 flex justify-center">
  <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
    <Image
      src="/Images/MowerRideon-300x200.jpg"
      alt="Toro Grandstand mower servicing a Boise residential lawn"
      width={400}
      height={267}
      sizes="(max-width: 640px) 100vw, 400px"
      className="object-cover w-full h-auto"
      priority
    />
  </div>
</div>
```

**Import needed:** Add `import Image from 'next/image';` (currently missing from this file).

---

### 4. `src/app/services/fertilization/page.tsx` — Fertilization photo near hero

**Location:** Insert below the `<CallToAction>` CTA on line 115, still inside the hero `<section>`.

```tsx
<div className="mt-10 flex justify-center">
  <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/60">
    <Image
      src="/Images/Fertilization-Weed-Control 300by200.jpg"
      alt="Lush Lawn Pros fertilization and weed control application in the Treasure Valley"
      width={400}
      height={267}
      sizes="(max-width: 640px) 100vw, 400px"
      className="object-cover w-full h-auto"
      priority
    />
  </div>
</div>
```

**Import needed:** Add `import Image from 'next/image';` (currently missing from this file).

---

### 5. `src/app/services/weed-control/page.tsx` — Bed weed control photo near hero

**Location:** Insert below the `<CallToAction>` CTA on line 102, still inside the hero `<section>`.

```tsx
<div className="mt-10 flex justify-center">
  <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/60">
    <Image
      src="/Images/Bed Weed Control 300by200.jpg"
      alt="Lush Lawn Pros technician spraying bed weed control at a Boise property"
      width={400}
      height={267}
      sizes="(max-width: 640px) 100vw, 400px"
      className="object-cover w-full h-auto"
      priority
    />
  </div>
</div>
```

**Import needed:** Add `import Image from 'next/image';` (currently missing from this file).

---

## Dependencies

None — `next/image` is already available in the project. All images already exist in `/public/Images/`. Only `Image` imports need to be added to the 3 service pages that lack them.

---

## Architect Blockers

1. **About page layout choice:** Plan defaults to a side-by-side photo + text layout on desktop (`md:flex-row`). If you prefer the photo to appear centered **above** the text on *all* screen sizes (full-width stack), please indicate that and the `md:flex-row` can be dropped.
2. **File name spaces:** `Family Picture.jpg`, `Fertilization-Weed-Control 300by200.jpg`, and `Bed Weed Control 300by200.jpg` contain spaces or special characters in their filenames. Next.js `next/image` encodes the path automatically, so this should work without renaming — but if you'd prefer the files to be renamed for hygiene, let me know before execution.

---

## Verification Plan

### Build Check (Automated)
After all edits, run from the project root:
```powershell
cd c:\DevProjects\Lush-Website-2026
npm run build
```
- ✅ Pass: Zero TypeScript / Next.js build errors.
- ❌ Fail: Any `Image` prop type error or missing module error.

### Dev Server Visual Check (Manual)
```powershell
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) and verify:

| Page | URL | What to check |
|---|---|---|
| Homepage | `/` | Photo card visible between hero and "Verdict from the Neighborhood" |
| About | `/about` | Family photo visible in "Our Story" card, side-by-side with text on desktop |
| Mowing | `/services/mowing` | Mower photo card visible below the CTA button in the hero |
| Fertilization | `/services/fertilization` | Fertilization photo card visible below the CTA button |
| Weed Control | `/services/weed-control` | Bed weed control photo card visible below the CTA button |
