// Create context menu item
browser.contextMenus.create({
  id: "copy-link-text",
  title: "Copy Link Text",
  contexts: ["link"]
});

// Handle menu item click
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-link-text") {
    // Copy link text to clipboard
    navigator.clipboard.writeText(info.linkText).then(() => {
      console.log("Link text copied to clipboard: " + info.linkText);
    }).catch(err => {
      console.error("Failed to copy link text: ", err);
    });
  }
});