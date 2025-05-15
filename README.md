# Icon Component Library

A lightweight React library for rendering icons using an optimized SVG sprite. Built with Vite and documented via Storybook, this project provides a scalable icon system for modern web applications.

## Overview

The `icon-component` library offers a reusable `Icon` component that renders icons from an SVG sprite (`public/icons.sprite.svg`). Icons are sourced from `src/icons/` and processed into a sprite with clean `<symbol>` IDs (e.g., `account`, `account-box`). The library is designed for performance and ease of use in React projects.

## Prerequisites

- **Node.js**: Version 20 or higher (`nvm install 20` recommended).
- **npm**: Version 9 or higher (included with Node.js).
- **Git**: To clone the repository.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jfersonREI/icon-component.git
   cd icon-component
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate the SVG sprite:
   ```bash
   node scripts/generate-sprite.js
   ```
   This creates `public/icons.sprite.svg` from SVGs in `src/icons/`.

## Usage

### Development Server

Start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173` to view the app.

### Storybook

Preview icons and component variations:

```bash
npm run storybook
```

Open `http://localhost:6006` to view the `Icon` component stories.

### Production Build

Build for production:

```bash
npm run build
```

Output is in `dist/`, including `icons.sprite.svg`.

Preview the build:

```bash
npm run preview
```

Open `http://localhost:4173`.

### SVG Sprite Generation

Regenerate the sprite after adding or modifying icons in `src/icons/`:

```bash
node scripts/generate-sprite.js
```

The script:

- Processes SVGs from `src/icons/` (e.g., `src/icons/actions/icon-account.svg`).
- Sets `fill="currentColor"` on paths.
- Creates `public/icons.sprite.svg` with `<symbol>` IDs like `account`.
- Generates debug files (`debug-account.svg`, `debug-pre-sprite.svg`) for inspection.

## Icon Component

Use the `Icon` component in your React app:

```jsx
import { Icon } from "./components/Icon";

function App() {
  return (
    <div>
      <Icon name="account" size="medium" color="default" />
      <Icon name="account-check" size="large" color="accent" />
    </div>
  );
}
```

- **Props**:
  - `name`: Icon ID (e.g., `account`, `account-box`). Matches `<symbol>` IDs in `icons.sprite.svg`.
  - `size`: `small`, `medium`, `large`, `xlarge`.
  - `color`: `default`, `accent`, `secondary` (CSS classes).

**Available Icons**:

- Actions: `account`, `account-box`, `account-check`, `account-circle`, `account-circle-outline`.
- Navigation: `home`, `menu`.
- Social: `twitter`, `facebook`.

Check the `AllIcons` story in Storybook for a complete list.

## Project Structure

```
icon-component/
├── src/
│   ├── components/
│   │   └── Icon.jsx          # Icon component
│   ├── icons/
│   │   ├── actions/
│   │   │   └── icon-account.svg  # Source SVGs
│   │   ├── navigation/
│   │   └── social/
│   ├── stories/
│   │   └── Icon.stories.jsx  # Storybook stories
│   └── index.css             # Styles
├── public/
│   └── icons.sprite.svg      # Generated sprite
├── scripts/
│   └── generate-sprite.js    # Sprite generation script
├── dist/                     # Build output
├── debug-*.svg               # Temporary debug files
├── package.json
└── README.md
```

## Troubleshooting

- **Sprite Generation Fails**:
  - Ensure `src/icons/` contains valid SVGs with `viewBox="0 0 24 24"`.
  - Run `node scripts/generate-sprite.js` and check console output.
  - Inspect `debug-account.svg` and `debug-pre-sprite.svg`.
- **Icons Not Rendering**:
  - Verify `public/icons.sprite.svg` has correct `<symbol>` IDs.
  - Check browser console for errors (e.g., `Failed to load /icons.sprite.svg#account`).
  - Ensure `name` prop matches a `<symbol>` ID.
- **Sprite Formatting Issues**:
  - If `<symbol` has extra spaces (e.g., `<symbol  viewBox`), the latest `generate-sprite.js` fixes this.
  - Share `debug-pre-sprite.svg` if issues persist.
- **Dependencies**:
  - Verify `svg-sprite@2.0.2` and `jsdom@24.0.0`:
    ```bash
    npm list svg-sprite jsdom
    npm install --save-dev svg-sprite@2.0.2 jsdom@24.0.0
    ```
- **Node.js**:
  - Use Node.js 20:
    ```bash
    nvm install 20
    nvm use 20
    npm install
    ```

## Contributing

Ensure:

- New icons are added to `src/icons/` with `icon-` prefix (e.g., `icon-new-icon.svg`).
- Storybook stories are updated (`src/stories/Icon.stories.jsx`).
- Tests pass (`npm run test`).

## License

MIT License. See [LICENSE](LICENSE) for details.

## Contact

Open an issue on [GitHub](https://github.com/jfersonREI/icon-component/issues) for questions or bugs.
