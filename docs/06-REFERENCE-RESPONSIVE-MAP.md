# 06 — REFERENCE RESPONSIVE MAP
## Responsive Architecture & Multi-Breakpoint Behavior

---

### 1. BREAKPOINT DEFINITIONS

| Viewport Tier | Width Range | Target Devices | Design Role |
| :--- | :--- | :--- | :--- |
| **Desktop Wide** | `≥ 1280px` (Base: `1440px`) | Laptops, Desktops, High-res displays | Master layout (full 4-col grids, side-by-side asymmetric hero, 9-col footer) |
| **Tablet / Small Desktop** | `768px – 1279px` (Base: `1024px`) | iPads, Tablets, Small Laptops | 2-col promo grid, 2×2 product grid, condensed footer columns |
| **Mobile** | `< 768px` (Base: `390px` iPhone / `360px` Android) | Mobile smartphones | Single-column flow, touch-optimized carousels, sticky bottom order bar |

---

### 2. SCENE-BY-SCENE RESPONSIVE REFLOW

#### Scene 01 & 02: Announcement Bar & Header
- **Desktop (1440px)**: Top bar with full text; Header with Logo left, full horizontal nav links in center, action buttons right.
- **Mobile (390px)**:
  - Top bar text size scales to 12px with single concise notice.
  - Header compresses to: Hamburger Menu (Left) + Centered Brand Logo (`~110px`) + Quick WhatsApp Order Icon (Right).
  - Sliding off-canvas navigation drawer with smooth backdrop blur.

#### Scene 03: Asymmetric Hero Section
- **Desktop (1440px)**: 2-column side-by-side (45% text left, 55% dynamic cutout collage right). Height ~600px.
- **Mobile (390px)**:
  - Reflows into a cohesive vertical stack:
    1. Monumental headline scales to ~32px-36px (3 tight lines).
    2. Subtitle with bullet dots.
    3. Floating confectionery collage scales to full container width (~340px height) centered between headline and CTA, preserving key cutout elements and annotations.
    4. Full-width primary CTA pill button (`height: 52px`, touch-friendly min 48px target).

#### Scene 04: Trust Badges Strip
- **Desktop (1440px)**: Single horizontal 11-item flex row.
- **Mobile (390px)**: Horizontal smooth-scrolling ribbon (`overflow-x: auto; scroll-snap-type: x mandatory`) with fade-out edge masks, or a 2-row grid of 5 items. Ensures zero clipping and zero visual clutter.

#### Scene 05: Dual Promo Banners
- **Desktop (1440px)**: 2 equal columns side-by-side (~640px each, gap 32px).
- **Mobile (390px)**: Vertical stack of 2 high-impact cards (`height: ~240px` each, margin-bottom 16px). Angled product cutouts position on the right with text and button on the left.

#### Scene 06: Best Sellers Grid
- **Desktop (1440px)**: 4 columns × 1 row.
- **Tablet (1024px)**: 2 columns × 2 rows.
- **Mobile (390px)**: 2 columns × 2 rows (tight card spacing ~12px) OR horizontal swipeable carousel with peek preview of the 2nd/3rd card.

#### Scene 07: The Sweet Source (Editorial Grid)
- **Desktop (1440px)**: 3 columns side-by-side.
- **Mobile (390px)**: Vertical stack of cards with 1:1 image on top, headline and snippet below, with 24px vertical spacing.

#### Scene 08: Our Community UGC Mosaic
- **Desktop (1440px)**: 1 Large vertical hero tile (left, full height) + 6 square tiles (right in 3×2 grid).
- **Mobile (390px)**:
  - Top: Large vertical craft tile (`height: 280px`).
  - Below: 2×2 or 3×2 compact square photo grid (`aspect-ratio: 1/1`).

#### Scene 09: Full-Bleed Social Ribbon
- **Desktop & Mobile**: Preserves full-bleed bar with centered circular touch targets (`48px × 48px` minimum touch target size for WCAG compliance).

#### Scene 10 & 11: Lead Capture & Footer
- **Desktop (1440px)**: Centered lead form; 4-tier footer with 8-column taxonomy.
- **Mobile (390px)**:
  - Lead form: Input field and button stack vertically with 100% width.
  - Footer: Accordion-style collapsible category drawers or streamlined 2-column taxonomy to prevent endless scrolling fatigue.
  - Payment badges, address, and copyright clearly visible at bottom.

---

### 3. TYPOGRAPHY SCALING SYSTEM (FLUID CLAMP)

| Element | Desktop Size (1440px) | Mobile Size (390px) | CSS Fluid Formula |
| :--- | :--- | :--- | :--- |
| **Hero Title** | `56px` | `32px` | `clamp(2rem, 1.4rem + 2.5vw, 3.5rem)` |
| **Section Titles** | `36px` | `24px` | `clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)` |
| **Promo Card Titles** | `28px` | `20px` | `clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem)` |
| **Card / Product Titles** | `18px` | `15px` | `clamp(0.95rem, 0.9rem + 0.3vw, 1.125rem)` |
| **Body Text** | `16px` | `14px` | `clamp(0.875rem, 0.825rem + 0.25vw, 1rem)` |
| **Microcopy / Badges** | `12px` | `11px` | `0.75rem` |
