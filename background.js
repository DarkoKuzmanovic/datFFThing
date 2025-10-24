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
        (function() {
          const text = "${info.linkText.replace(/"/g, '\\"').replace(/'/g, "\\'").replace(/\n/g, "\\n")}";
          const textArea = document.createElement("textarea");
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          console.log("Link text copied to clipboard: " + text);
        })();
      `
    });
  }
});