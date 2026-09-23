# Design QA

- Source visual truth: `/Users/aekbhisit/Project/wp-zcom/plan/assets/wp-zcom-selected-redesign-clean.png`
- Source pixels: 1600 × 4096
- Intended implementation viewport: 1440 × 1000 CSS px, deviceScaleFactor 1
- Implementation URL: `http://localhost:4173/`
- Implementation screenshot: unavailable — no Browser or Chrome backend was available in the current session
- State: desktop, default state, live hero promotion countdown, comparison table closed, first FAQ open
- Density normalization: not performed because the browser-rendered implementation capture could not be obtained

**Findings**

- [Blocked] Browser-rendered comparison evidence is unavailable.
  Location: full page.
  Evidence: the source target was opened and inspected, but browser discovery returned no available browser backends, so the rendered implementation could not be captured or placed in a combined comparison view.
  Impact: fonts, wrapping, spacing rhythm, responsive layout, image crops, colors, icons, focus states, and console errors cannot be truthfully signed off from visual evidence.
  Fix: reconnect an in-app Browser or Chrome backend, capture the page at 1440 × 1000 and 390 × 844, then run the full-view and focused-region comparisons.

**Required fidelity surfaces**

- Fonts and typography: implemented with Noto Sans Thai Variable; visual rendering and wrap fidelity remain unverified.
- Spacing and layout rhythm: code follows the selected section sequence and wider whitespace; browser evidence remains unverified.
- Colors and visual tokens: implementation maps to Z.com red, charcoal, white, and light gray; rendered contrast remains unverified.
- Image quality and asset fidelity: official logo plus generated hero, dashboard, and Thai-support assets are present; final browser crop and sharpness remain unverified.
- Copy and content: updated to verified current package prices and limits. This intentionally differs from inaccurate numbers visible in the generated concept image.
- Icons: Phosphor icon components are used consistently; rendered alignment remains unverified.
- Hero identity: official WordPress W mark is shown beside “WordPress Hosting + WP Squared”; rendered sizing remains unverified.
- Responsive behavior: desktop, tablet, and mobile rules are implemented; browser testing remains unverified.

**Full-view comparison evidence**

- Source target opened successfully.
- Implementation capture unavailable, so no valid combined full-view comparison was possible.

**Focused region comparison evidence**

- Not possible without the implementation capture. Priority regions for the next pass: header/hero, pricing cards, WP Squared section, security/tool rows, Thai support, FAQ, and minimal footer.

**Primary interactions to test**

- Mobile navigation open/close
- Live promotion countdown and expired state
- Hero contains one conversion CTA
- Audience choice recommends and scrolls to a plan
- Plan selected state
- All-plan comparison open/close
- FAQ expand/collapse
- Purchase and support links

**Console errors checked**

- Not checked because no browser backend was available.

**Comparison history**

- Pass 1: blocked before visual comparison. No visual fixes were made from unsupported evidence.

**Implementation Checklist**

- Connect a supported browser backend.
- Capture desktop and mobile implementation screenshots.
- Create the combined source/implementation comparison.
- Fix any P0/P1/P2 issues and repeat until clear.

final result: blocked
