# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

datFFThing is a simple Firefox extension built using the WebExtensions API. It adds a context menu item that allows users to copy the text content of links to their clipboard.

## Architecture

- **manifest.json**: Defines extension metadata, permissions (contextMenus, clipboardWrite), and background script
- **background.js**: Contains all the extension logic - creates context menu and handles clipboard operations
- **icon.png**: Extension icon (48x48 pixels)
- **test.html**: Simple test page for verifying functionality

## Development Workflow

### Testing the Extension
1. Load the extension in Firefox/Firefox Developer Edition via `about:debugging` → "This Firefox" → "Load Temporary Add-on..." → select `manifest.json`
2. Open `test.html` in the browser to test functionality
3. For debugging, use "Inspect" button on the extension in `about:debugging` to open developer tools for the background script

### Key Considerations
- Extension uses manifest version 3 with the legacy `scripts` property for background scripts
- Single background script handles all functionality
- Uses `browser.contextMenus` API for creating menu items
- Uses `navigator.clipboard.writeText()` for clipboard operations
- Firefox doesn't support automatic theme-aware icon switching through manifest.json