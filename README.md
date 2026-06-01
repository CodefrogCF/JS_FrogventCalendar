# Frogvent Calendar

An interactive advent calendar web application built with HTML, CSS, and JavaScript. This project creates a festive calendar experience where users can unlock daily surprises throughout the December season.

## Overview

Frogvent Calendar is a simple yet engaging advent calendar that displays 24 doors representing each day leading up to Christmas. Users can click on doors to reveal surprise images, but only after the corresponding date has arrived.

## Features

- Interactive 24-door advent calendar layout
- Date-based door unlocking system (automatically unlocks doors as December dates pass)
- Surprise image reveal functionality
- Responsive design optimized for both desktop and mobile devices
- Fixed header and footer navigation
- Visual feedback for active and disabled doors
- Smooth transitions and hover effects

## Project Structure

JS_FrogventCalendar/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Calendar logic and interactivity
├── .htaccess           # Web server configuration
└── assets/             # Images and media files
    ├── favicon.ico     # Browser tab icon
    ├── images/         # Door content images (1-24)
    ├── banner.png      # Header banner
    └── logo_*          # Logo files

## How It Works

### HTML
- Creates a grid layout of 24 buttons representing calendar doors
- Organizes doors into 6 rows of 4 buttons each
- Includes a hidden image container for displaying surprise content
- Features header and footer sections with branding

### CSS
- Implements a clean, centered layout using flexbox
- Disables doors visually with gray coloring until they become active
- Active doors appear green with hover effects
- Includes media queries for responsive mobile experience
- Maintains fixed header and footer navigation

### JavaScript
- Checks the current date on page load
- Automatically enables doors when their corresponding date arrives
- Handles click events to display surprise images
- Provides visual feedback through CSS class toggles
- Includes a hidden easter egg function

## How to Use

1. Open index.html in a web browser
2. Doors appear locked (gray) until their corresponding date in December
3. Click any unlocked door to reveal its surprise image
4. Images display in the main content area
5. Click another door to view a different surprise

## Language Composition

- HTML: 67.7%
- CSS: 21%
- JavaScript: 11.3%

## Requirements

- Web browser with JavaScript enabled
- No external dependencies required

## Browser Compatibility

Works with all modern browsers that support:
- ES6 JavaScript
- CSS Flexbox
- HTML5 semantic elements

## Customization

To customize the calendar:

- Add your own images: Replace files in assets/images/ with numbered files (1.jpg through 24.jpg)
- Change colors: Modify CSS variables in styles.css (button colors, background, etc.)
- Adjust layout: Modify button dimensions and spacing in styles.css
- Update branding: Replace banner and logo images in assets/images/

## Notes

- Calendar is hardcoded for December 2025
- All doors are initially disabled to prevent peeking
- Surprise images load on first page load for better performance
- Responsive design adapts to screens 768px and below


## Author

**CodefrogCF**
