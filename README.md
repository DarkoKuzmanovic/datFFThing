# datFFThing Firefox Extension

A personal Firefox extension with helper tools to make life easier.

## Current Features

### Copy Link Text
Right-click on any link to copy its text content to your clipboard.

## Installation (Development)

1. Clone or download this repository
2. Ensure `icon.png` file exists (48x48 pixels)
3. Open Firefox or Firefox Developer Edition and navigate to `about:debugging`
4. Click "This Firefox" in the left sidebar
5. Click "Load Temporary Add-on..."
6. Navigate to the extension directory and select the `manifest.json` file

## Usage

1. Right-click on any link on a webpage
2. Select "Copy Link Text" from the context menu
3. The link text will be copied to your clipboard (no notification will be shown)

## Testing

Open `test.html` in your browser to test the functionality.

### Testing in Firefox Developer Edition

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

## Development

This extension is built using WebExtensions API, which is compatible with Firefox.

### Files

- `manifest.json` - Extension metadata and permissions
- `background.js` - Background script handling context menu and clipboard operations
- `icon.png` - Extension icon
- `test.html` - Test page for verifying functionality

### Permissions

- `contextMenus` - To create the right-click menu item
- `clipboardWrite` - To write text to the clipboard

### Icon Design

The extension uses a single icon (`icon.png`) for all themes. For best results, use an icon with a transparent background or one that contrasts well with both light and dark backgrounds.