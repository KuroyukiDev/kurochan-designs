# Application Blueprint

## Overview

This is a graphic design portfolio website for a potential employer. It is built using Bootstrap 5 and features a clean, modern, dark-themed layout. The site's purpose is to showcase design work in two specific categories: "Water Bottles" and "T-Shirts".

## Project Structure & Design

*   **`index.html`**: The main entry point of the application. It contains the entire user experience, including the category navigation and the portfolio display.
*   **`style.css`**: Contains custom styles, including the dark theme and specific layout adjustments.
*   **`main.js`**: For any future custom JavaScript functionality.
*   **`downloads/`**: A directory containing the design files (`.ai`, `.png`, `.gif`) that will be linked from the portfolio cards for employers to download.

### Design & Layout

*   **Framework**: Bootstrap 5.
*   **Theme**: A custom dark mode theme is applied.
*   **Navbar**: A responsive, dark-themed navbar with links to "Home," "Water Bottles," and "T-Shirts."
*   **Home Page / Category Section**: At the top of the page, a grid will display two Bootstrap cards representing the main design categories: "Water Bottles" and "T-Shirts". These cards will act as navigation, linking to the corresponding tabs in the portfolio section below.
*   **Hidden Card**: A third, wider card is present in the HTML structure but will be hidden using CSS (`display: none;`). This card is reserved for future use.
*   **Portfolio Section**: This section uses the Bootstrap 5 Tab component to separate the portfolio into the two categories.
    *   **Tabs**: "Water Bottles" and "T-Shirts".
    *   **Tab Panes**: Each tab's content area will feature a responsive, horizontal grid of Bootstrap cards.
    *   **Portfolio Cards**: Each card within the tab panes will contain:
        *   A preview image of the design.
        *   The design's title.
        *   A "Downloads" section with links to the corresponding `.ai` and image (`.png` or `.gif`) files located in the `/downloads/` directory.
*   **Footer**: A footer with copyright information and social media links.

