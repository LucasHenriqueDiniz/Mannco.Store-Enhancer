// startGiveawayEnhancer.js
const config = {
    enableGiveawayEnhancer: true,
    showMissingGiveaways: true,
    giveawayBorders: true,
    quickEnterButton: true,
    showAllGivewaysInTheSamePage: true,
    // ...
  };
  
  function handleConfigData(config) {
    chrome.storage.sync.get(Object.keys(config), (result) => {
      Object.keys(config).forEach((key) => {
        config[key] = result[key] !== undefined ? result[key] : config[key];
      });
      
      const configElement = document.createElement('div');
      configElement.className = 'mannco-enhancer'
      configElement.setAttribute('data-config', JSON.stringify(config));
      document.body.appendChild(configElement);
      
      // Call a function and pass the config data
      // handleConfigData(config);
    });
  }
  
  handleConfigData(config);
  