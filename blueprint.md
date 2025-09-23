
# Application Blueprint

## Overview

This project is a static website designed to run on GitHub Pages. It uses modern HTML, CSS, and JavaScript, with Bootstrap 5 for styling and components. The site is a portfolio for a graphic designer.

## Project Structure & Design

*   **`index.html`**: The main entry point of the application. It includes a navigation bar, a hero section, a portfolio grid, and a footer.
*   **`style.css`**: Contains custom styles for the application, including a forced dark mode theme.
*   **`main.js`**: For custom JavaScript functionality. It is loaded as an ES Module (`<script type="module">`), allowing for modern JavaScript features and code organization.
*   **Bootstrap 5**: The Bootstrap 5 CSS and JS (with Popper.js) libraries are included via CDN with SRI hashes for security.

### Color Scheme and Theming

*   **Dark Mode**: The website uses a forced dark mode.
*   **Background**: The main background color is dark slate grey (`#2F4F4F`).
*   **Text**: Body text is white for readability.
*   **Interactable Elements**: Buttons and links use the Bootstrap `info` theme color.
*   **Buttons**: All buttons across the site should use the `rounded-4` class to match the corner rounding of the card components.

## Implemented Features

*   Created a boilerplate Bootstrap 5 homepage for a Graphic Design portfolio.
*   Implemented a forced dark mode color scheme.
*   Updated `index.html` with a navbar, hero section, portfolio grid, and footer.
*   Updated `style.css` to apply the dark theme and custom styles.
*   Updated the button rounding to `rounded-4`.

## Current Plan

*   **Fix Asset Loading Issue:** Reconfigure the project from a Single Page Application (SPA) to a standard multi-page static site.
*   **Enable ES Modules:** Modified the `index.html` to load `main.js` using `<script type="module">`.
*   **Fix JavaScript Execution Timing:** Wrapped the code in `main.js` within a `DOMContentLoaded` event listener. This ensures the script runs only after the full HTML document is loaded, preventing errors from trying to access DOM elements that haven't been rendered yet.
*   **Fix Placeholder Images:** Replaced the placeholder image service from `via.placeholder.com` to `placehold.co` to resolve loading issues.
*   **Configure Development Server:** Updated the `.idx/dev.nix` file to use a more robust Node.js-based `http-server` instead of the default Python server. This ensures that JavaScript modules are served with the correct MIME type, which was preventing the browser from executing the script.
