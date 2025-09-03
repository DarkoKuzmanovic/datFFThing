# datFFThing Firefox Extension Development

## Project Overview
Creating a Firefox extension called "datFFThing" with helper tools to make life easier.

## Features
1. Copy Link Text - Right-click on a link to copy its text content to clipboard
2. [Planned] Additional helper tools to be determined

## Development Progress
- [x] Created project structure
- [x] Implemented "Copy Link Text" context menu feature
- [x] Created manifest.json with required permissions
- [x] Created background.js with context menu implementation
- [x] Enhanced background script with user notifications
- [x] Created SVG icon for extension
- [x] Created icon information document
- [x] Created test.html for verification
- [x] Created README.md with documentation
- [x] Created package.json for project metadata
- [x] Implemented theme-aware icons (light/dark)
- [x] Removed unnecessary icon generation script
- [x] Removed distracting toast notifications
- [x] Fixed manifest warning for theme icons
- [x] Corrected icon approach for Firefox (single icon)
- [ ] Testing and refinement with manually created icons
- [ ] Packaging for distribution

## Testing Instructions
1. Ensure `icon-light.png` and `icon-dark.png` files exist in the extension directory
2. Open Firefox or Firefox Developer Edition and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on..."
5. Navigate to the extension directory and select the manifest.json file
6. Open test.html in your browser
7. Right-click on the link and select "Copy Link Text"
8. Paste the clipboard content in the text area to verify it worked
9. Test icon appearance in both light and dark Firefox themes

## Testing in Firefox Developer Edition
Firefox Developer Edition provides enhanced developer tools for testing extensions:

1. Loading the extension:
   - Open Firefox Developer Edition
   - Navigate to `about:debugging`
   - Click "This Firefox" in the left sidebar
   - Click "Load Temporary Add-on..."
   - Select the `manifest.json` file in your extension directory

2. Debugging the extension:
   - In `about:debugging`, find your extension and click "Inspect"
   - This opens the developer tools for your extension's background script
   - You can view console logs, set breakpoints, and debug your JavaScript code

3. Testing the theme-aware icons:
   - Set Firefox Developer Edition to light theme (Settings > Customize > Light theme)
   - Verify the `icon-light.png` appears in the toolbar
   - Switch to dark theme (Settings > Customize > Dark theme)
   - Verify the `icon-dark.png` appears in the toolbar

## Next Steps
1. Test the extension thoroughly with your manually created icons
2. Package the extension for distribution
3. Add more helper tools as needed