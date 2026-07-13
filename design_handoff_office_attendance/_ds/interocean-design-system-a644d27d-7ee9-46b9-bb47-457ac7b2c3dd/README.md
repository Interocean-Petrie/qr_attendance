# Interocean Design System

A design system for **Interocean Marine Services** — a UK-based offshore services company (HQ: Aberdeen) providing a *total project solution* across three core sectors: **Offshore Oil & Gas**, **Maritime**, and **Renewables**.

> *Multi-sector support for the full asset life cycle.*
> — Interocean homepage tagline

This design system is the canonical source for designing branded materials (presentations, web pages, case studies, social posts, internal documents). Stick to it. The brand guidelines are deliberately restrictive: three colours, one type family, one logo.

---

## Sources

These materials informed the system. Reader does not need access — they're recorded so future iterations can be traced.

| Source | Path / URL | Notes |
|---|---|---|
| Brand Guidelines PDF | `uploads/Brand Guidelines.pdf` | 16-page official brand book. Drives all rules below. |
| Primary logo | `uploads/Full logo.png` → `assets/logo-full.png` | Preferred (full colour) version of the logo. |
| Public site | https://interocean.com/ | Real product surface. Used for tone, copy, and observed visual treatments. |
| LinkedIn | https://www.linkedin.com/company/interocean-marineservices | Brand voice on social. |

---

## Index

| File / Folder | What it is |
|---|---|
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Cross-compatible skill manifest. |
| `colors_and_type.css` | All design tokens as CSS custom properties + semantic element styles. |
| `fonts/` | Web fonts (Outfit). Arial is system fallback. |
| `assets/` | Logos and brand visuals. |
| `preview/` | Design-system tab cards. One concept per card. |
| `ui_kits/website/` | High-fidelity recreation of the interocean.com marketing site. |

---

## Sectors / Products

Interocean's brand surfaces split along these lines. When designing, lead with the sector being addressed.

1. **Renewables** — floating wind, wind farm development, marine operations coordination, inspection, UAV.
2. **Maritime** — marine consultancy, marine warranty, moorings, survey & subsea, engineering, marine projects, compliance & risk.
3. **Offshore (Oil & Gas)** — construction support, inspection services, statutory inspection, UAV services.

These three sectors are equal partners. Don't accidentally make one bigger or more "primary" than the others in layouts.

---

## CONTENT FUNDAMENTALS

### Voice
- **Authoritative, professional, calm.** Industry-credible, never breezy. Interocean talk like a seasoned engineering consultancy, not a startup.
- **First-person plural.** "We provide", "Our team delivers", "We support". Rarely "I". Address the reader as the client implicitly — "clients", "our clients" — not "you" in body copy.
- **No marketing hype.** No exclamation marks. No "amazing", "game-changing", "revolutionise". Claims are stated flatly and backed by capability.

### Casing & punctuation
- **Sentence case** for headings ("Latest news", not "Latest News"). Section titles on the site are sentence case.
- **Title Case** is acceptable for section labels and CTA buttons ("Contact Us", "Read More").
- **British English** throughout: *organisation, colours, optimisation, recognise, programme, life-cycle.* Never American spelling.
- **Smart / curly quotes** in body copy: 'total project solution', not 'total project solution'.
- **Oxford comma** is fine but not required. Be consistent within a document.
- **Numbers**: write out one to nine, numerals for 10+. Use commas in thousands. Dates UK-style: 9 March 2026.

### Vocabulary — preferred phrases
Use these. They appear repeatedly across the brand and reinforce positioning.

- "total project solution"
- "single-source provider"
- "full asset life-cycle" / "asset integrity"
- "multi-sector support"
- "safe, efficient, and cost-effective solutions"
- "from planning, design and installation to operational maintenance and decommissioning"
- "offshore oil and gas, marine, and renewable sectors"

### Vocabulary — industry terms used unflinchingly
The audience is industrial; don't soften the jargon. Acceptable as written:

> MWS · ROV · UAV · MODU · IRM · subsea · moorings · decommissioning · statutory inspection · floating wind · construction support · marine warranty

### Things to avoid
- ❌ Emoji of any kind. **Never** in any Interocean material.
- ❌ Exclamation marks.
- ❌ Contractions in formal copy ("don't", "we're") — fine in news posts and personal stories ("Alastair's Story"), but avoid in marketing pages and capability descriptions.
- ❌ "Innovative", "cutting-edge", "world-class" used as filler. Only state when backed by award or fact (e.g. *"Recognised at the IMCA Awards"*).
- ❌ Adjective stacking. One adjective max.

### Examples — observed from live site
> "Interocean provide a comprehensive range of services to the offshore oil and gas, marine, and renewable sectors. We provide a 'total project solution' from planning design and installation to operational maintenance and decommissioning."

> "Offering global marine services, we support renewables, maritime, and offshore oil and gas sectors. Our team delivers value as a single-source provider with safe, efficient, and cost-effective solutions."

> "As a single-source provider, we offer asset integrity and maintenance support across renewable, maritime, and oil and gas sectors."

Notice: declarative sentences, no questions, no second-person address. Each block reinforces *single-source* and *multi-sector*.

---

## VISUAL FOUNDATIONS

The Interocean brand is **restrained, corporate, and industrial**. Three colours, one type family, generous white space, photography of real assets at sea. The brand book repeatedly insists: don't introduce new colours, don't recreate the logo, don't add effects.

### Colour
| Token | Hex | Use |
|---|---|---|
| Navy | `#2A4066` | Primary brand colour. Headings, dark surfaces, the top half of the wave mark. |
| Bright blue | `#055EDD` | Accent, CTAs, links, active states, the wordmark, the bottom half of the wave mark. |
| Blue grey | `#5479A1` | Body text, secondary copy, borders, dividers. |
| White | `#FFFFFF` | Surfaces, reversed logo background. |

**No other colour may be introduced.** Tints (alpha overlays of the three blues) are permitted for hover/press states and subtle backgrounds, but no new hues. Greys for dividers come from `#5479A1` at low alpha.

### Typography
- **Outfit Light** (300 weight) is the default for everything — body, headings, captions. Used at varying sizes; weight rarely changes. This gives the brand its quiet, technical feel.
- **Outfit Regular / Medium** acceptable for very small UI labels where 300 reads too thin.
- **Arial Regular** is the fallback only — for editable docs sent outside the organisation.
- Headings are sentence case. Tracking is normal (no all-caps display unless tiny labels — eyebrow text may be `text-transform: uppercase` with `letter-spacing: 0.12em`).
- Line-height ~1.45 for body, ~1.15 for display.

### Spacing & layout
- Generous whitespace. The brand book's exclusion zone around the logo is set by the width of the "I" / "n" in the wordmark.
- Layouts are **grid-based, left-aligned**, with consistent margins. The website uses Elementor section blocks with comfortable vertical padding (~80–120px on desktop).
- Logo minimum size: **40 mm** print, ~120px digital.
- 8px base spacing unit. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.

### Backgrounds
- Predominantly **white** or **navy** (`#2A4066`).
- **Photography** — real photos of vessels, wind turbines, offshore platforms, ROV/UAV operations, technicians on deck. Cool tone, daylight, no over-saturation. Often shot from the water or air. Sometimes overlaid with a slight navy gradient at the bottom for legibility of overlaid text.
- **No hand-drawn illustrations.** No abstract shapes. No pattern fills.
- **No gradients as colour fills** — the only gradient permitted is a *protection gradient* (e.g. navy 0% → navy 60% at the bottom of a hero image so white text remains legible).

### Iconography
- The brand has **no proprietary icon set**. Custom icons aren't part of the guidelines.
- Where icons are needed (UI: phone, email, menu, arrows, social), use **Lucide** (https://lucide.dev) — stroke `1.5`, rounded line caps, in `currentColor`. This matches the calm, line-based feel of Outfit Light. See ICONOGRAPHY section below for details.

### Animation
- **Minimal and functional.** No bouncy, decorative, or attention-grabbing motion.
- Permitted: **opacity fades** (200–300 ms), gentle **slide-up** on scroll reveal (300 ms, ease-out), navigation transitions.
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard) or simple `ease-out`. No `cubic-bezier` with overshoot.
- Hover transitions: **150 ms** opacity / colour change. Press: instant.

### Interaction states
- **Hover** on links: shift from `--bright-blue` to a slightly darker shade (`#0449b0`), or +5% darken. On dark surfaces: shift to white. No underline appearing on hover unless absent before.
- **Hover** on solid CTAs: darken background ~6–8%. No scale, no shadow swell.
- **Press / active**: darken further (~12%). No scale shrink.
- **Focus**: 2 px solid `--bright-blue` outline with 2 px offset.
- **Disabled**: 40% opacity, no pointer events.

### Borders, radius, shadow
- **Border radius**: small and consistent. `4 px` for buttons and inputs, `8 px` for cards. The logo mark has a noticeable top-left rounded corner — `16 px` style — which can appear as an accent for hero panels or featured cards. **Never rounded pill shapes** for content (only OK on tiny tags).
- **Borders**: `1 px solid` `#5479A1` at 20% alpha for dividers, `1 px solid #2A4066` for emphasis.
- **Shadows**: used sparingly. Card elevation:
  - `0 1px 2px rgba(42, 64, 102, 0.06), 0 1px 3px rgba(42, 64, 102, 0.08)` — sm
  - `0 4px 6px rgba(42, 64, 102, 0.05), 0 10px 15px rgba(42, 64, 102, 0.08)` — md
  - `0 25px 50px rgba(42, 64, 102, 0.18)` — lg, for modals/dropdowns
- No inner shadows. No coloured shadows beyond navy tint.

### Transparency & blur
- Backdrop blur is **not part of the brand**. Don't use frosted glass / glassmorphism.
- Transparency is used only for: overlays on hero photography (navy at 0–60%), and divider lines (blue-grey at 20%).

### Cards
- White background, 1 px navy-tint border OR small shadow (one or the other, not both).
- 8 px border radius. 24 px internal padding minimum.
- Title in navy, body in blue-grey.
- Optional: 16 px top-left "logo-style" corner radius as a hero accent (matches the wave mark frame). Use sparingly — once per page.

### Imagery treatment
- **Cool, natural colour.** No filters, no duotone, no black-and-white. Daylight, blue water, grey skies, yellow safety gear.
- Crops should breathe — give vessels and turbines room. Avoid tight crops on faces.
- Aspect ratios: `16:9` for heroes, `4:3` for cards, `1:1` for square cards / social, `3:1` for banner.
- Permitted overlay: linear gradient `rgba(42, 64, 102, 0)` → `rgba(42, 64, 102, 0.7)` bottom 40% for text legibility.

### Logo usage
- Always use full lockup: wave mark + wordmark. **Never** wordmark alone, **never** mark alone.
- Exclusion zone: width of the "I"/"n" character on all sides.
- Reversed logo (white) only on photography or dark surfaces — never on coloured backgrounds outside the palette.
- Never alter colours, distort, recolour, or apply effects.

---

## ICONOGRAPHY

Interocean's brand guidelines do **not specify an icon system**. There is no proprietary icon font, no SVG library shipped with the brand, no emoji usage in any official material.

**Recommendation, flagged as a substitution:** use **Lucide** (https://lucide.dev) via CDN. Why:
- Open source, MIT-licensed, well-maintained.
- Single stroke weight matches Outfit Light's stroke contrast.
- Rounded line caps echo the wave mark's curved sweep.
- Renders in `currentColor` so it always picks up the navy / bright-blue tokens.

**Usage rules:**
- Stroke width: `1.5`.
- Size: 16 / 20 / 24 / 32 px. Match the line-height of adjacent text.
- Colour: inherit from text colour. Never use a separate icon colour.
- Where Lucide doesn't cover a domain need (e.g. "ROV", "subsea cable", "MODU"), commission a real illustration or photograph rather than drawing a generic SVG.
- **Never use emoji.**
- **Never use unicode symbols** as icons (no ⚓, no ⚙, no →). Use Lucide's `arrow-right` instead.

Icons live in `assets/icons/` if cached locally; otherwise pull from `https://unpkg.com/lucide@latest`.

---

## CAVEATS

1. **Outfit Light** is fetched from Google Fonts (free, official). No bespoke font file was supplied in the brand pack; this is the same family the brand guide names.
2. **Lucide icon set** is a *substitution* — the brand has no proprietary icons. Flagged.
3. **Brand book images** (business card, letterhead, Teams background, presentation template) referenced in the PDF were not separately supplied as image files; only the PDF describes them. They are not recreated in this system. If you need those artefacts, ask for the source files.
4. The **navy** in the brand book is `#2A4066`; the wave mark in the supplied logo PNG renders very close to this. The wordmark and lower wave both use `#055EDD`. Verified by eye against the logo.
