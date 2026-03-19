# My Static Website

A clean, fast, and modern static website built with semantic HTML5, BEM-styled CSS, and modular JavaScript. No build tools or external dependencies required.

## Project Structure

```
Website Final/
├── index.html          # Main HTML page
├── css/
│   └── styles.css      # BEM-structured styles with CSS custom properties
├── js/
│   └── main.js         # Modular JavaScript (year, active nav, contact form)
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## Features

- Responsive, mobile-friendly layout
- Sticky navigation with active link highlighting
- Hero, About, Features, and Contact sections
- Client-side contact form with validation
- BEM CSS architecture with CSS custom properties
- No external dependencies

## Running Locally

Use the built-in VS Code task to serve the project:

1. Open the **Terminal** menu → **Run Task…**
2. Select **Serve Static Website**
3. Open your browser and navigate to `http://localhost:3000`

Alternatively, run the following command:

```bash
npx serve .
```

## Customization

- Update colours and fonts via CSS custom properties in `css/styles.css` (`:root` block).
- Add new sections by following the existing BEM naming pattern in `index.html` and `css/styles.css`.
- Extend JavaScript functionality in `js/main.js` using the IIFE module pattern.
