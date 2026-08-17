# 05 — REFERENCE MOTION MAP
## Behavioral Grammar & Micro-Interaction Architecture

---

### 1. MOTION PHILOSOPHY

Motion in this design is **appetite-driven, tactile, and responsive**. It reinforces physical weight, buttery smoothness, and celebratory freshness. It avoids arbitrary robotic tech easing or jittery decorative micro-animations.

---

### 2. SCENE-BY-SCENE MOTION SPECIFICATIONS

#### Scene 01 & 02: Top Bar & Header Navigation
- **Initial Load**: Announcement bar slips down from `translateY(-100%)` to `0` over 400ms (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Sticky Behavior**: Header becomes fixed with a subtle backdrop blur (`backdrop-filter: blur(12px)`) and a slight shadow elevation (`box-shadow: 0 4px 20px rgba(61, 35, 20, 0.08)`) once scroll offset passes 120px.
- **Nav Hover States**: Nav links feature an expanding horizontal gold underline starting from center (`transform: scaleX(0)` → `scaleX(1)` over 220ms).
- **CTA Button Hover**: High-contrast WhatsApp pill button lifts slightly (`transform: translateY(-2px)`) with enhanced drop shadow.

#### Scene 03: The Asymmetric Hero Section
- **Entrance Sequence**:
  1. *0ms – 400ms*: Headline text lines reveal upwards with a soft fade and clip-path mask.
  2. *200ms – 600ms*: Sub-headline and CTA pill scale in with slight elastic rebound.
  3. *300ms – 800ms*: The floating confectionery collage elements bloom outward from the center with staggered parallax depths (main cake rises, dessert cups drift, berry garnishes settle).
  4. *700ms – 1100ms*: Hand-drawn curved SVG pointer arrows draw themselves (`stroke-dashoffset` animation from 100% to 0) accompanied by a pop-in of the organic badge labels.
- **Ambient / Idle Motion**: Gentle floating parallax bobbing on floating candies/berries (`translateY: ±4px`, duration 3.5s, alternate infinite ease-in-out).

#### Scene 04: Trust Badges Strip
- **Scroll Entrance**: Badges stagger into view sequentially from left to right as the viewport intersects the section (`opacity: 0, translateY: 16px` → `opacity: 1, translateY: 0`, 60ms stagger per icon).
- **Hover Interaction**: Hovering over any circular badge scales the icon up (`scale: 1.1`) and illuminates the circular golden outline. The central starburst badge features a continuous slow shimmer glow.

#### Scene 05: Dual Featured Promo Cards
- **Scroll Reveal**: Cards slide up smoothly with 100ms stagger.
- **Card Hover & Cutout Interaction**:
  - The entire card lifts smoothly (`transform: translateY(-4px)`).
  - The angled cutout product image expands and rotates slightly (`transform: scale(1.04) rotate(-2deg)`), creating an energetic "reaching out" 3D pop.
  - The white pill CTA button darkens subtly with increased shadow depth.

#### Scene 06: Best Sellers Product Carousel / Grid
- **Card Hover State**:
  - The product image smoothly scales (`transform: scale(1.05)` over 300ms).
  - Floating status badge ("MAIS PEDIDO", "RECEITA EXCLUSIVA") pulses softly.
  - Golden star ratings illuminate with a quick sequential glimmer.
  - "ENCOMENDAR / ADICIONAR" button transitions to active state.

#### Scene 07: The Sweet Source (Editorial Grid)
- **Image Hover**: The 1:1 lifestyle photo smoothly zooms (`transform: scale(1.06)` within its overflow-hidden container).
- **Title Accent**: Article headline changes color from deep cocoa to rich caramel gold on card hover.

#### Scene 08: Our Community UGC Mosaic
- **Tile Hover Interaction**:
  - Darkened gradient overlay lifts to reveal full vibrant photo colors.
  - An Instagram glyph / caption tag fades into view on hover.
  - Large vertical craft tile features a continuous subtle video/zoom breath effect that emphasizes the handmade confectionery craft.

#### Scene 09: Full-Bleed Social Ribbon
- **Icon Hover**: Circular social buttons bounce slightly (`transform: translateY(-3px) scale(1.1)`) with an inverted background fill.

#### Scene 10 & 11: Newsletter & Monumental Footer
- **Form Focus State**: Input field glows with a warm golden rim (`box-shadow: 0 0 0 3px rgba(197, 154, 78, 0.25)`).
- **Footer Wordmark**: Giant "DOÇARIA TOQUE DE ARTE" wordmark has a subtle metallic golden sheen gradient on desktop viewports.
