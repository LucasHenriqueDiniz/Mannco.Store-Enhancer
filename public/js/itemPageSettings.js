/*global chrome*/

const config = {
  enableItemPageEnhancer: true, //

  itemPageSmallFixes: true, //
  openCsgoSkinInSwap: true, //
  itemPageGoToTopOfPage: true, //

  itemPageRemoveSalesGraph: false, //
  itemPageMinimizeSalesGraphButton: true, //
  itemPageSalesGraphDefaultStance: "minimized", //

  itemPageMinimizeItemInfo: true, //
  itemPageMinimizeItemInfoDefaultStance: "minimized", //

  enableBoostOrderButton: true, //
  boostOrderCustomQuantity: 0, //
  boostOrderCustomValue: 0.01, //
  activeBoostOrderOnKeyPress: false, //
  customKeyPressBoostOrder: "Enter", //

  enableMatchingBuyOrderButton: true, //
  matchingBuyOrderCustomQuantity: 0, //
  activeMatchingBuyOrderOnKeyPress: false, //
  customKeyPressMatchingBuyOrder: "", //

  enableJustOneCentButton: true, //
  justOneCentCustomQuantity: 0, //
  activeJustOneCentOnKeyPress: false, //
  customKeyPressJustOneCent: "", //

  organizeButtonsLayout: true, //
  autoRefreshPageAfterSetNewBuyOrder: true, //
  automaticallyAjustBuyOrderQuantityWithAvaibleMoney: true, //

  changeBuyOrdersBackgroundIfNotHighestBuyOrder: true, //
  buyOrdersBackgroundColorTrue: "#52a447", //
  buyOrdersBackgroundColorFalse: "#c61a09", //
  changeBuyOrdersBorderIfNotHighestBuyOrder: true, //
  buyOrdersBorderStyle: "groove", //
  buyOrdersBorderColorTrue: "#52a447", //
  buyOrdersBorderColorFalse: "#c61a09", //

  buyOrdersEnableProfitCalculator: true, //
  buyOrdersShowCurrentFees: true, //

  itemPageCopyItemPriceToClipboard: true, //
  buyOrdersCopyItemNameToClipboard: true, //

  enableOtherMarketplacesPrices: true,
  enableSteamPrices: true,
  enableBackPackTfPrices: true,
  enableBuff163Prices: true,
  enableBuffMarketPrices: true,
  enableBitSkinsPrices: true,
  enableBitskinsPrices: true,
  enableCsDealsPrices: true,
  enableCsMoneyPrices: true,
  enableCsTradePrices: true,
  enableCsgoFloatPrices: true,
  enableDMarketPrices: true,
  enableGamerPayPrices: true,
  enableLootFarmPrices: true,
  enableLisSkinsPrices: true,
  enableManncoStorePrices: true,
  enableMarketCsgoPrices: true,
  enableSwapGgPrices: true,
  enableShadowPayPrices: true,
  enableSkinBaronPrices: true,
  enableSkinBidPrices: true,
  enableSkinportPrices: true,
  enableTf2TmPrices: true,
  enableTradeitGgPrices: true,
  enableWaxpeerPrices: true,

  //enhancer settings
  currenciesValue: 1,
  removeGlobalBanner: true,
  removeItemDetailsTitle: true,
  removeBreadcrumb: true,
};

function handleConfigData(config) {
  chrome.storage.sync.get(Object.keys(config), (result) => {
    Object.keys(config).forEach((key) => {
      config[key] = result[key] !== undefined ? result[key] : config[key];
    });

    const configElement = document.createElement("div");
    configElement.className = "mannco-enhancer";
    configElement.setAttribute("data-config", JSON.stringify(config));
    document.body.appendChild(configElement);

    // Call a function and pass the config data
    // handleConfigData(config);
  });
}

handleConfigData(config);
