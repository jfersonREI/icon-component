# Design System with Large Icon Set (Vite)

A design system built with Vite, integrating a large icon set using SVG sprite sheets, design tokens, and reusable components.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Optimize icons (if adding new ones):
   ```bash
   npx svgo -f src/icons -o src/icons
   ```
3. Generate SVG sprite sheet:
   ```bash
   node scripts/generate-sprite.js
   ```
4. Build tokens:
   ```bash
   npm run build-tokens
   ```
5. Start development server:
   ```bash
   npm run dev
   ```
6. Run Storybook:
   ```bash
   npm run storybook
   ```

## Usage

- **Icons**: Use the `Icon` component with names from `src/icons` (e.g., `<Icon name="cart" size="medium" color="accent" />`).
- **Components**: Use `PrimaryButton`, `NavigationBar`, `MediaCard` in site pages.
- **Site Pages**: See `EcommercePage`, `BlogPage`, `PortfolioPage` for examples.

## Deployment

1. Build for production:
   ```bash
   npm run build
   ```
2. Publish to npm:
   ```bash
   npm publish
   ```
3. Deploy to Vercel or similar platform.

## Testing

- Run unit tests:
  ```bash
  npm test
  ```
- Use Storybook’s `addon-a11y` for accessibility checks.

```

```
