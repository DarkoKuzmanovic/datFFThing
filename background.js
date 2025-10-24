// Create context menu item
browser.contextMenus.create({
  id: "copy-link-text",
  title: "Copy Link Text",
  contexts: ["link"]
});

// Handle menu item click
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-link-text") {
    // Copy link text to clipboard using executeScript
    browser.tabs.executeScript({
      code: `
        const text = "${info.linkText}";
        navigator.clipboard.writeText(text).then(() => {
          console.log("Link text copied to clipboard: " + text);
        }).catch(err => {
          console.error("Failed to copy link text: ", err);
        });
      `
    });
  }
});