# KDL LANDING MANIFESTO V2
## Reference-Led Architecture + Client-Owned Identity

---

# 0. PURPOSE

This project is not an exercise in generating a generic landing page.

The goal is to create a distinctive, production-quality web experience
for a real client using:

1. a real client identity;
2. real client content and assets;
3. one explicitly approved reference website;
4. reference-led visual architecture;
5. client-owned design system;
6. high-fidelity implementation;
7. human visual approval gates.

The final website must feel intentionally designed.

It must NOT look like:

- an AI-generated restaurant template;
- a SaaS landing page adapted to another industry;
- a generic card-based website;
- a collection of interchangeable sections;
- a Bootstrap/Webflow/Framer template;
- previous KDL client projects.

---

# 1. THE CENTRAL LAW

REFERENCE DNA controls HOW the experience is constructed.

CLIENT DNA controls WHO the experience belongs to.

REFERENCE DNA includes:

- page silhouette;
- composition;
- grid;
- scale;
- proportions;
- whitespace;
- typography geometry;
- image geometry;
- section rhythm;
- layering;
- overlaps;
- viewport occupation;
- navigation behavior;
- motion grammar;
- scroll behavior;
- interaction patterns;
- responsive composition.

CLIENT DNA includes:

- logo;
- brand colors;
- typography identity;
- photography;
- content;
- copy;
- products/services;
- location;
- contact information;
- iconography;
- graphic motifs;
- brand personality.

The reference controls architecture.

The client controls identity.

Never invert this relationship.

---

# 2. REFERENCE AUTHORITY

The project contains:

referencia/reference-full.png
referencia/reference-url.txt

These files are mandatory sources of truth.

The reference is NOT optional inspiration.

It is the approved target for:

- visual hierarchy;
- spatial composition;
- scale relationships;
- section rhythm;
- image behavior;
- motion logic;
- interaction philosophy;
- page density;
- responsive reasoning.

Do not reduce the reference to:

"modern"
"premium"
"editorial"
"minimal"
"playful"
"bold"

These adjectives are insufficient.

Reverse engineer the actual design mechanisms.

---

# 3. REFERENCE IS NOT BRAND IDENTITY

Never blindly inherit from the reference:

- logo;
- brand name;
- copy;
- proprietary illustrations;
- proprietary photographs;
- trademarked elements;
- product identity;
- brand-specific graphics.

Colors and typography require special treatment.

Their FUNCTION may be reference-led.

Their IDENTITY must be client-led.

Example:

If the reference uses a strong accent color for dominant CTA moments,
the client version should preserve the accent hierarchy but use a color
derived from the client's identity.

If the reference uses monumental display typography,
preserve monumental typography geometry but select a typeface appropriate
to the client.

---

# 4. CLIENT DESIGN SYSTEM IS MANDATORY

Before full-page implementation, create:

docs/CLIENT-DESIGN-SYSTEM.md

The design system must be derived from actual evidence.

Inspect:

- logo;
- signage;
- physical location;
- packaging;
- menus;
- uniforms;
- social media visuals when available;
- supplied photography;
- existing branded material.

Never invent a palette based only on industry stereotypes.

Forbidden reasoning:

restaurant = beige
bar = black
grill = red
premium = gold
artisanal = serif
technology = blue
natural = green

Brand decisions require evidence.

---

# 5. COLOR OWNERSHIP

Every important color must have a documented origin.

Classify colors as:

BRAND PRIMARY
BRAND SECONDARY
BRAND ACCENT
BACKGROUND PRIMARY
BACKGROUND SECONDARY
SURFACE
TEXT PRIMARY
TEXT SECONDARY
INTERACTIVE
BORDER

For each token document:

VALUE
SOURCE
ROLE
RATIONALE

If the client identity has insufficient color information,
derive a compatible system from the strongest available real-world assets.

Do not simply reuse the reference palette.

---

# 6. TYPOGRAPHY OWNERSHIP

Typography has two dimensions:

IDENTITY
and
GEOMETRY.

Identity belongs to the client.

Geometry may be reference-led.

Reference-led typography geometry includes:

- relative scale;
- width;
- hierarchy;
- line breaks;
- density;
- alignment;
- relationship to imagery;
- viewport dominance.

Do not automatically use:

Inter
Poppins
Montserrat
Roboto
Outfit
Playfair Display

unless evidence supports the choice.

---

# 7. IMAGE-FIRST DESIGN

Real client photography is primary material.

Before designing, inspect all images.

Create:

docs/CLIENT-ASSET-MAP.md

For every useful asset document:

- filename;
- subject;
- dimensions;
- quality;
- orientation;
- potential role;
- recommended crop;
- reference counterpart.

Do not build arbitrary cards and insert images afterward.

Composition must respond to available photography.

---

# 8. ASSET ADAPTATION

When client imagery does not naturally match reference geometry,
adapt the image before redesigning the composition.

Allowed:

- crop;
- object-position;
- masking;
- background removal;
- controlled image extension;
- overlays;
- layering;
- clipping;
- image composition;
- controlled overflow.

Preserve original source assets.

---

# 9. NO GENERIC AI ARCHITECTURE

The following patterns are forbidden unless clearly present in the reference:

- repeated three-card grids;
- icon + title + paragraph feature cards;
- centered heading above every section;
- pill badges everywhere;
- excessive rounded cards;
- glassmorphism by default;
- gradients without purpose;
- random glow effects;
- floating blobs;
- repeated alternating text-left/image-right sections;
- generic testimonial cards;
- generic statistic ribbons;
- identical section padding throughout;
- excessive eyebrow labels;
- default fade-up animations;
- decorative elements with no conceptual role.

Never solve every content problem with a card.

---

# 10. NO KDL STYLE TRANSFER

Previous KDL landing pages are NOT references.

Do not reuse their:

- hero composition;
- section structure;
- cards;
- palettes;
- typography pairings;
- footer composition;
- testimonial layout;
- navigation;
- decorative devices.

Each client starts from zero.

Similarity between different KDL client websites is considered a failure.

---

# 11. SILHOUETTE TEST

Blur both:

REFERENCE
CLIENT IMPLEMENTATION

At macro level they should demonstrate comparable:

- visual mass;
- whitespace;
- rhythm;
- dominant blocks;
- section heights;
- image occupation;
- typography occupation.

If their silhouettes are fundamentally unrelated,
reference fidelity has failed.

---

# 12. SCREENSHOT-FIRST VALIDATION

Never declare visual success from code inspection.

The project must be rendered.

Required validation:

1440x900 desktop
390x844 mobile

Full-page screenshots are required during final phases.

Visual approval belongs exclusively to the human reviewer.

The AI cannot self-approve a visual gate.

Words such as:

PASS
OUTSTANDING
PERFECT
100% FIDELITY

do not constitute approval.

---

# 13. MOTION IS ARCHITECTURE

Motion must be studied from the live reference.

Inspect:

- initial load;
- hero entrance;
- scrolling;
- sticky behavior;
- pinning;
- parallax;
- marquees;
- image transitions;
- text reveals;
- hover states;
- navigation transformations;
- section transitions;
- cursor behavior when relevant.

Do not replace complex reference behavior with generic fade-up animations.

---

# 14. RESPONSIVE DESIGN IS NOT STACKING

Mobile is not:

desktop columns → flex-direction: column.

Study how the reference changes hierarchy on smaller screens.

Preserve:

- narrative order;
- dominant visual element;
- typography importance;
- interaction clarity;
- image impact;
- spacing rhythm.

Mobile may require a different composition.

---

# 15. CONTENT TRUTH

Never fabricate:

- ratings;
- review counts;
- awards;
- dates;
- prices;
- addresses;
- opening hours;
- testimonials;
- products;
- statistics.

Use only verified client information.

Unknown information must remain unknown.

---

# 16. REFERENCE FIDELITY WITHOUT COPYING IDENTITY

The objective is not source-code duplication.

The objective is to understand and reproduce the reference's design grammar
using original implementation and client-owned content.

Preserve mechanisms.

Replace identity.

---

# 17. REQUIRED SKILL USE

Before each relevant phase, inspect the installed Antigravity Awesome Skills
catalog and use the most appropriate available skills.

Prioritize skills covering capabilities such as:

- frontend design;
- high-end visual design;
- UI/UX;
- redesign;
- scroll experiences;
- responsive design;
- accessibility;
- UI review;
- visual validation;
- motion;
- code quality.

Do not invoke skills mechanically.

Read their SKILL.md instructions and apply them to the actual phase.

Document which skills were used and why.

---

# 18. HUMAN GATES

The workflow contains mandatory human approval gates.

If a phase requiring approval is rejected:

STOP.

Do not continue.

Execute its corresponding R phase.

Only explicit human approval unlocks the next phase.

---

# 19. IMPLEMENTATION QUALITY

Production code must be:

- semantic;
- maintainable;
- responsive;
- accessible;
- organized;
- performant;
- free from unnecessary dependencies;
- free from console errors;
- free from broken links;
- free from accidental reference branding.

---

# 20. FINAL SUCCESS CONDITION

The final website must simultaneously pass:

REFERENCE TEST
"It clearly inherited the reference's design grammar."

CLIENT TEST
"It unmistakably belongs to this client."

ANTI-GENERIC TEST
"It does not look like an AI landing-page template."

SIBLING TEST
"It does not look like another KDL client project."

MOBILE TEST
"The mobile experience feels intentionally designed."

FUNCTIONAL TEST
"Real interactions, links and responsive behavior work."

Failure of any test requires correction.

---

# KDL V2 PRINCIPLE

REFERENCE DNA = ARCHITECTURE

CLIENT DNA = IDENTITY

HUMAN REVIEW = AUTHORITY