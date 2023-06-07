/* global chrome */

const loadSettings = () => {
  const defaultConfig = {
    enableProfileEnhancer: true,
    enableGiveawayEnhancer: true,
    enableItemPageEnhancer: true,
    enableInventoryEnhancer: true,
  };

  chrome.storage.sync.get(Object.keys(defaultConfig), (result) => {
    const config = Object.keys(defaultConfig).reduce((acc, key) => {
      acc[key] = result[key] !== undefined ? result[key] : defaultConfig[key];
      return acc;
    }, {});

    chrome.webNavigation.onCompleted.addListener(function(details) {
      if (config.enableProfileEnhancer) {
        if (details.url.includes('/profile')) {
          console.log('Enabling profileEnhancer.js');

          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["modules/xlsx.full.min.js", "js/profileEnhancer.js"],
          }, () => {
          chrome.scripting.insertCSS({
            target: { tabId: details.tabId },
            files: ["js/profileEnhancer.css"],
          });
        })
      }
      }
      if (config.enableGiveawayEnhancer) {
        if (details.url.includes('/giveaways')) {
          console.log('Enabling giveawayEnhancer.js', config.enableGiveawayEnhancer);

          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["js/givewayEnhancerSettings.js"],
          }),
          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["js/givewaysEnhancer.js"],
            world: 'MAIN',
          }, () => {
          chrome.scripting.insertCSS({
            target: { tabId: details.tabId },
            files: ["js/givewaysEnhancer.css"],
          });
        })
      }
      }
      if (config.enableItemPageEnhancer) {
        if (details.url.includes('/item')) {
          console.log('Enabling itemPageEnhancer.js', config.enableItemPageEnhancer);

          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["js/itemPageSettings.js"],
          }),
          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["js/itemPageMarkets.js"],
          }),
          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["js/itemPageEnhancer.js"],
            world: 'MAIN',
          }, () => {
          chrome.scripting.insertCSS({
            target: { tabId: details.tabId },
            files: ["js/itemPageEnhancer.css"],
          });
        })
      }
      }
      if (config.enableInventoryEnhancer) {
        if (details.url.includes('/inventory')) {
          console.log('Enabling inventoryEnhancer.js');
      
          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["js/inventoryEnhancer.js"],
          }, () => {
            chrome.scripting.insertCSS({
              target: { tabId: details.tabId },
              files: ["js/inventoryEnhancer.css"],
            });
          });
        }
      }      
    });
  });
};

try {
  loadSettings();

  // background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'executeCode') {
    // Perform the operations that require access to chrome.storage.sync
    chrome.storage.sync.get(Object.keys(config), (result) => {
      Object.keys(config).forEach((key) => {
        config[key] = result[key] !== undefined ? result[key] : config[key];
        console.log(config[key], result[key])
      });

      // Send a response back to the content script if needed
      sendResponse({ status: 'success' });
    });

    // Ensure that sendResponse is called asynchronously
    return true;
  }
});



} catch (e) {
  console.log('Error with background.js');
  console.log(e);
}
