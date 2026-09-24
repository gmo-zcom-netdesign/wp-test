# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build the app UI in `src/` as a Vite React single-page app. Deploy it on Vercel with the default Vite preset: build command `npm run build`, output directory `dist`.

## Approved Z.com Direction

- Base copy and facts on the current public Z.com WordPress Hosting page.
- Preserve the current Z.com WordPress SVG logo and brand red `#D62825`.
- Use the selected clean, dark WP Squared visual target at `../plan/assets/wp-zcom-selected-redesign-clean.png`.
- Keep content concise and clearly separated: plans, WP Squared, security, tools, Thai support and trust, FAQ.
- Hide the five-plan technical comparison behind an explicit user action instead of showing a dense table by default.
- Do not show onboarding steps in the middle of the page; migration guidance belongs in FAQ until policy is confirmed.
- Keep the footer minimal. Do not recreate the current site's large service sitemap.
