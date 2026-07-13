# Handoff: Office Sign-In / Sign-Out & Muster System

## Overview
A QR-code-based attendance system for an office/site. Staff scan a wall-mounted QR code with their phone to sign in or out of the building. A live occupancy dashboard shows who is currently in the building. A Fire Warden uses the same system on their phone during an emergency evacuation to run a roll-call ("muster") against everyone who was signed in at the time the drill/incident started. An admin screen manages the staff roster.

Brand: Interocean Marine Services (offshore/maritime/renewables services company). Visual system: navy `#2A4066`, bright blue `#055EDD`, blue-grey `#5479A1`, white — Outfit Light typeface throughout. See "Design Tokens" below.

## About the Design Files
The files in this bundle (`Office Attendance.dc.html`, `Sign-In Poster.dc.html`) are **design references built in HTML** — interactive prototypes showing intended look, flows, and behavior. They are not production code to copy directly. The task is to **recreate these designs in your target stack** (React Native / native iOS-Android / a web app — whichever fits your deployment) using real backend state instead of the browser-only state the prototype uses, and using your codebase's existing patterns/libraries where they exist.

`Office Attendance.dc.html` runs as a single self-contained page — open it directly in a browser to click through all four screens. It's presented inside an iPhone bezel purely for presentation; the actual implementation should be a responsive mobile web page (most realistic: a PWA or plain mobile-optimized site, since staff will open it from a QR scan in their phone browser, not an installed app).

## Fidelity
**High-fidelity.** Colors, type, spacing, and copy in the prototype are final — recreate pixel-close using your stack's styling approach, referencing the exact tokens listed below rather than the raw HTML/inline styles.

## Important product/architecture note (prototype limitation)
The prototype stores all state in the browser's `localStorage`, per-device. **This will not work as a real multi-person system** — it needs a shared backend so that:
- One person signing in on their phone is immediately visible to everyone else's phone (occupancy dashboard, muster view).
- The employee roster is centrally managed (not per-device).
- The muster roll-call state is shared in real time between the Fire Warden's phone and whoever is signing in/out during the drill.

Recommended real architecture:
- Backend API + database (e.g., a `employees` table, an `attendance_events` table logging every sign-in/out with timestamp, and a `musters` table for roll-call sessions).
- Realtime sync for the occupancy and muster views (websocket/polling) so the Fire Warden's screen updates live as people are marked accounted for, or as latecomers sign in during the drill.
- The QR code should point to a permanent hosted URL for the sign-in page (the prototype poster uses a placeholder URL, `attendance.interocean.co.uk/signin` — replace with the real one).
- Identity: the prototype's "tap your name from a list" is fine for a small trusted office, but doesn't stop someone signing in as a colleague. Consider a PIN, a personal QR per employee (badge-based), or SSO login if that matters for this deployment — flag this as an open question for the client.
- Access control: the Muster/Admin screens should likely be restricted (e.g., only Fire Wardens / admins can access them), whereas Sign-in/Occupancy are open to all staff. The prototype has no auth at all — add it.

## Screens / Views

All four screens live in one page with a bottom tab bar for navigation (in the real product, Sign-in is what a QR scan opens directly; Occupancy/Muster/Admin are reached via that same page's tab bar, ideally gated by role).

Shared chrome:
- **Header**: navy (`#2A4066`) background, white text. Padding `56px 20px 18px` (top padding clears a phone's status bar/notch — adjust for however your framework handles safe areas). Row: "Interocean" wordmark label (14px, weight 500) left, live clock (13px, 65% white) right. Below: screen title (24px, weight 300, white) and one-line subtitle (13px, 65% white).
- **Bottom tab bar**: white background, `1px solid` top border in `--io-border`. Four equal-width tabs: Sign in/out, Occupancy, Muster, Admin. Each is an icon (21×21, stroke 1.5, line-based/Lucide-style) stacked over an 11px label. Active tab: bright blue (`#055EDD`). Inactive: blue-grey (`#5479A1`).
- **Toast**: transient confirmation banner ("Grace Mackenzie signed in at 09:14"), navy background, white text, floats above the tab bar, auto-dismisses after ~2.2s.

### 1. Sign In / Sign Out
**Purpose**: staff pick their name and toggle their status. This is the screen a QR scan should land on.
**Layout**: a plain list, one row per employee, `16px 20px` padding, `1px solid` bottom divider (`--io-border`).
Each row:
- Left: 10px status dot (filled bright-blue with bright-blue border if signed in; transparent with blue-grey border if signed out), then name (16px, weight 400, navy) over a caption line "{Job title} · {Sector}" (13px, blue-grey).
- Right: small pill tag, radius `9999px`, `4px 10px` padding, 12px weight 500 — "In" (bg `rgba(5,94,221,0.12)`, text bright-blue) or "Out" (bg blue-grey 10% tint, text blue-grey).
- Tap a row: row background tints to `rgba(42,64,102,0.06)` and an action panel expands directly beneath it containing one full-width button (52px tall, radius 4px, bright-blue bg, white text, 16px weight 500) labeled "Sign In" or "Sign Out" depending on current state. Tapping it commits the change, shows the toast, and collapses the panel.

### 2. Occupancy (who's in the building)
**Purpose**: anyone can check current headcount and who's in.
**Layout**:
- Big stat row: large number (40px, weight 300, navy) = count currently signed in, next to "of {total} in the building" (16px blue-grey).
- Three equal stat cards in a row (`--io-bg-2` background, 8px radius, 12px padding, centered): one per sector (Offshore / Maritime / Renewables) showing count (20px navy) + label (11px blue-grey).
- Section label "IN THE BUILDING" (13px weight 500, uppercase, letter-spacing 0.06em, blue-grey).
- List of currently-signed-in people sorted by sign-in time ascending (longest-present first): name + role/sector caption on the left, "since {HH:MM}" + elapsed duration ("2h 14m" / "12m") right-aligned.
- Empty state if nobody's in: centered "No one is currently signed in." (14px blue-grey).

### 3. Muster (Fire Warden roll call)
**Purpose**: used during a fire drill/emergency. Starting a muster snapshots everyone currently signed in as the roll-call roster; the warden taps people off as they're accounted for at the muster point.
**Idle state** (before a muster is started): centered card — 56×56 navy-tinted rounded-square icon badge with an alert-circle icon, heading "Start a muster" (20px navy), body copy "Creates a roll call of everyone currently signed in. Use this during a fire drill or emergency evacuation." (14px blue-grey), a line showing current occupancy count, and a full-width "Start Muster" button (bright-blue, same style as the sign-in action button).
**Active state**:
- "Roll call started at {HH:MM}" (13px blue-grey).
- "{accounted} of {total} accounted for" (16px navy weight 500) above an 8px-tall progress bar (track: blue-grey 20% tint, radius full; fill: bright-blue, animates width).
- When everyone is accounted for: a navy banner with a white checkmark icon and "All accounted for" (14px white weight 500).
- Roster list: one row per person snapshotted into this muster (not the live full staff list — only those who were signed in when the muster started). Each row: name + role/sector caption, and a 28px circular tap target on the right — outlined blue-grey when not yet accounted, filled bright-blue with a white checkmark when accounted. Tapping the row toggles accounted state. Rows fade to 50% opacity once accounted, to visually separate "still need to check" from "done".
- Full-width "End Muster" button at the bottom (outlined navy, transparent bg) clears the muster and returns to idle.

### 4. Admin (manage staff)
**Purpose**: add/remove employees from the roster.
**Layout**:
- "ADD EMPLOYEE" section: two text inputs (Full name, Job title — 44px tall, `1px solid var(--io-border)`, 4px radius) and a sector `<select>` (Offshore / Maritime / Renewables), then a full-width "+ Add Employee" button (bright-blue, matches other primary buttons).
- "STAFF ({count})" list: one row per employee (name + role/sector caption) with a trash icon button (36×36, blue-grey, hover navy-tinted background) on the right to remove them.
- Footer: small underlined "Reset demo data" text link (prototype-only convenience — drop in production, or repurpose as an actual seed/reset admin action if useful).

## Interactions & Behavior
- All primary/CTA buttons: hover darkens background to `--io-bright-blue-darker` (`#0449B0`), active/press to `--io-bright-blue-darkest` (`#033685`). 150ms transition.
- Outline buttons (End Muster): hover fills with `--io-navy-06`.
- Row selection/expansion, progress bar fill, and opacity changes on muster rows all transition over 150–250ms using `cubic-bezier(0.4,0,0.2,1)` — no bounce/overshoot easing anywhere, per brand motion rules.
- No confirmation dialogs are used anywhere in the prototype (the expand-in-place action panel on Sign-in acts as the "are you sure" step). Consider whether Admin's remove-employee action needs a confirm step in production (prototype does not have one).
- Live clock in the header and elapsed-time labels update periodically (prototype polls every 30s) — production should use a real timer or recompute on each render tick.

## State Management
Conceptual state, to become real backend records:
- **Employee**: `id, name, role (job title), sector (Offshore | Maritime | Renewables)`.
- **Attendance status**: derived from the latest sign-in/out event per employee — `signedIn: boolean`, `signInAt: timestamp | null`. In production, keep this as an append-only event log (`sign_in` / `sign_out` events with timestamp + employee id) rather than a single mutable flag, so you retain a real audit trail of building access.
- **Muster session**: `startedAt: timestamp`, `roster: [{ employeeId, accounted: boolean }]` — the roster is a snapshot taken at start time of everyone then signed in; it does not grow if someone signs in after the muster starts (flag this as a product decision — you may want new sign-ins during an active muster to append to the roster, since they're now also in the building and need accounting for).
- Ending a muster discards the session (prototype does not archive past musters — consider keeping a history for compliance/incident review in production).

## Design Tokens
- Colors: Navy `#2A4066`, Bright blue `#055EDD` (hover `#0449B0`, active `#033685`), Blue-grey `#5479A1`, White `#FFFFFF`. Tints used: navy 6% (`rgba(42,64,102,0.06)`) for selected/hover surfaces, blue-grey 10%/20% (`rgba(84,121,161,0.10 / 0.20)`) for tags and dividers/track bars, bright-blue 12% (`rgba(5,94,221,0.12)`) for the "In" status tag.
- Typography: Outfit, weight 300 (Light) as the default for body/headings; weight 400–500 for small UI labels (row names, buttons, tags). Sizes used: 11, 12, 13, 14, 15, 16, 20, 24, 40px.
- Radius: 4px (buttons, inputs), 8px (cards), 9999px (tiny tags/pills only — never content containers).
- Borders: `1px solid` blue-grey 20% (`--io-border`) for dividers; `1px solid` navy for emphasis (End Muster outline button).
- Shadows: brand's `--io-shadow-md`/`lg` tokens for any elevated surface (prototype doesn't use elevation beyond flat dividers).
- Spacing: 8px base scale (4/8/12/16/24/32/48/64/96), used throughout for padding/gaps.
- Icons: line-style, stroke width 1.5, round caps/joins, `currentColor` fill of "none" — matches Lucide (https://lucide.dev). Icons used: log-in arrow (Sign in/out tab), two-person users (Occupancy tab), alert-circle (Muster tab + idle-state badge), sliders (Admin tab), checkmark (accounted state, all-accounted banner), plus (Add employee), trash (remove employee).

## Assets
- `assets/logo-full.png` — Interocean full-colour logo lockup (wave mark + wordmark), used on the printable sign-in poster only. Sourced from the bound Interocean Design System's brand assets. Never recolor, distort, or use the mark alone.
- No other images; all icons are inline line-art SVGs (no icon font/library dependency in the prototype).

## Printable Sign-In Poster
`Sign-In Poster.dc.html` is a second, separate design: an A4 (794×1123px @96dpi) printable sheet meant to be printed and mounted at the office entrance. Contents, top to bottom: Interocean logo, "SITE ATTENDANCE" eyebrow (bright-blue, uppercase, letter-spacing 0.12em), "Sign in / sign out" heading (48px navy), one line of instruction copy, a large QR code (360×360, navy foreground on white, inside a card with the brand's signature 16px-top-left-corner accent + 1px navy border), the URL spelled out as a fallback, a divider, then a short "For Fire Wardens" note pointing them to the Muster tab during a drill, and a footer credit line.
- **The QR code currently encodes a placeholder URL** (`https://attendance.interocean.co.uk/signin`) generated via a public QR image API (`api.qrserver.com`) for prototype purposes. Replace with a QR code encoding your real, permanent, hosted sign-in URL before printing for real use — and regenerate it with whatever QR generation your production pipeline uses (no need to depend on a third-party API at runtime; this was just a prototyping shortcut).
- Print at actual size (A4), no scaling — the page is already sized in the file.

## Files
- `Office Attendance.dc.html` — the four-screen mobile app prototype (Sign in/out, Occupancy, Muster, Admin), fully clickable, phone-bezel presentation.
- `Sign-In Poster.dc.html` — the printable wall poster with QR code.
- `assets/logo-full.png` — logo asset used by the poster.

These are HTML+inline-React-style prototype files built with an internal design tool; open directly in any browser. Treat all inline styles/markup as a styling and structure *reference*, not literal source to paste into your codebase.
