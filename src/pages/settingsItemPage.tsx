/*global chrome*/

import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';

import './settings.css';
import { CreateSwitch, CreateColorPicker, CreateSelector, CreateValueBox, CreateTextBox } from "./functions/functions.jsx"
import ScrollToTopButton from "./functions/scrollToTop.jsx"

const ItemPageSettings = () => {
  //enable
  const [enableItemPageEnhancer, setEnableItemPageEnhancer] = useState(true);

  //Misc
  const [itemPageSmallFixes, setItemPageSmallFixes] = useState(false);
  const [openCsgoSkinInSwap, setOpenCsgoSkinInSwap] = useState(false);
  const [itemPageGoToTopOfPage, setItemPageGoToTopOfPage] = useState(false);
  const [itemPageRemoveSalesGraph, setItemPageRemoveSalesGraph] = useState(false);
  const [itemPageMinimizeSalesGraphButton, setItemPageMinimizeSalesGraphButton] = useState(false);
  const [itemPageSalesGraphDefaultStance, setItemPageSalesGraphDefaultStance] = useState('minimized');
  const [hideItemInfo, setHideItemInfo] = useState('true')
  const [hideItemInfoDefaultStance, setHideItemInfoDefaultStance] = useState('minimized')

  //Boost Order Button
  const [enableBoostOrderButton, setEnableBoostOrderButton] = useState(true);
  const [boostOrderCustomQuantity, setBoostOrderCustomQuantity] = useState(0);
  const [boostOrderCustomValue, setBoostOrderCustomValue] = useState(0.01);
  const [activeBoostOrderOnKeyPress, setActiveBoostOrderOnKeyPress] = useState(false);
  const [customKeyPressBoostOrder, setCustomKeyPressBoostOrder] = useState('Enter');

  //Matching BuyOrder
  const [enableMatchingBuyOrderButton, setEnableMatchingBuyOrderButton] = useState(false);
  const [matchingBuyOrderCustomQuantity, setMatchingBuyOrderCustomQuantity] = useState(0);
  const [activeMatchingBuyOrderOnKeyPress, setActiveMatchingBuyOrderOnKeyPress] = useState(false);
  const [customKeyPressMatchingBuyOrder, setCustomKeyPressMatchingBuyOrder] = useState('');

  //Just One Cent
  const [enableJustOneCentButton, setEnableJustOneCentButton] = useState(false);
  const [justOneCentCustomQuantity, setJustOneCentCustomQuantity] = useState(0);
  const [activeJustOneCentOnKeyPress, setActiveJustOneCentOnKeyPress] = useState(false);
  const [customKeyPressJustOneCent, setCustomKeyPressJustOneCent] = useState('');

  //Misc Buttons
  const [organizeButtonsLayout, setOrganizeButtonsLayout] = useState(false);
  const [autoRefreshPageAfterSetNewBuyOrder, setAutoRefreshPageAfterSetNewBuyOrder] = useState(false);
  const [automaticallyAjustBuyOrderQuantityWithAvaibleMoney, setAutomaticallyAjustBuyOrderQuantityWithAvaibleMoney] = useState(false);

  //change bg for buy orders value
  const [changeBuyOrdersBackgroundIfNotHighestBuyOrder, setChangeBuyOrdersBackgroundIfNotHighestBuyOrder] = useState(false);
  const [buyOrdersBackgroundColorTrue, setBuyOrdersBackgroundColorTrue] = useState('');
  const [buyOrdersBackgroundColorFalse, setBuyOrdersBackgroundColorFalse] = useState('');
  const [changeBuyOrdersBorderIfNotHighestBuyOrder, setChangeBuyOrdersBorderIfNotHighestBuyOrder] = useState(false);
  const [buyOrdersBorderStyle, setBuyOrdersBorderStyle] = useState('');
  const [buyOrdersBorderColorTrue, setBuyOrdersBorderColorTrue] = useState('');
  const [buyOrdersBorderColorFalse, setBuyOrdersBorderColorFalse] = useState('');

  //profit calculator
  const [buyOrdersEnableProfitCalculator, setBuyOrdersEnableProfitCalculator] = useState(false);
  const [buyOrdersShowCurrentFees, setBuyOrdersShowCurrentFees] = useState(false);

  //copy to clipboard
  const [itemPageCopyItemPriceToClipboard, setitemPageCopyItemPriceToClipboard] = useState(false);
  const [buyOrdersCopyItemNameToClipboard, setBuyOrdersCopyItemNameToClipboard] = useState(false);

  //More price info
  const [enableOtherMarketplacesPrices, setEnableOtherMarketplacesPrices] = useState(true);
  const [enableSteamPrices, setEnableSteamPrices] = useState(true);
  const [enableBackPackTfPrices, setEnableBackPackTfPrices] = useState(true);
  const [enableBuff163Prices, setEnableBuff163Prices] = useState(true);
  const [enableBuffMarketPrices, setEnableBuffMarketPrices] = useState(true);
  const [enableBitSkinsPrices, setEnableBitSkinsPrices] = useState(true);
  const [enableBitskinsPrices, setEnableBitskinsPrices] = useState(true);
  const [enableCsDealsPrices, setEnableCsDealsPrices] = useState(true);
  const [enableCsMoneyPrices, setEnableCsMoneyPrices] = useState(true);
  const [enableCsTradePrices, setEnableCsTradePrices] = useState(true);
  const [enableCsgoFloatPrices, setEnableCsgoFloatPrices] = useState(true);
  const [enableDMarketPrices, setEnableDMarketPrices] = useState(true);
  const [enableGamerPayPrices, setEnableGamerPayPrices] = useState(true);
  const [enableLootFarmPrices, setEnableLootFarmPrices] = useState(true);
  const [enableLisSkinsPrices, setEnableLisSkinsPrices] = useState(true);
  const [enableManncoStorePrices, setEnableManncoStorePrices] = useState(true);
  const [enableMarketCsgoPrices, setEnableMarketCsgoPrices] = useState(true);
  const [enableSwapGgPrices, setEnableSwapGgPrices] = useState(true);
  const [enableShadowPayPrices, setEnableShadowPayPrices] = useState(true);
  const [enableSkinBaronPrices, setEnableSkinBaronPrices] = useState(true);
  const [enableSkinBidPrices, setEnableSkinBidPrices] = useState(true);
  const [enableSkinportPrices, setEnableSkinportPrices] = useState(true);
  const [enableTf2TmPrices, setEnableTf2TmPrices] = useState(true);
  const [enableTradeitGgPrices, setEnableTradeitGgPrices] = useState(true);
  const [enableWaxpeerPrices, setEnableWaxpeerPrices] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    chrome.storage.sync.get(
      [
        'enableItemPageEnhancer',
        'itemPageSmallFixes',
        'openCsgoSkinInSwap',
        'itemPageGoToTopOfPage',
        'itemPageRemoveSalesGraph',
        'itemPageMinimizeSalesGraphButton',
        'itemPageSalesGraphDefaultStance',
        'hideItemInfo',
        'hideItemInfoDefaultStance',
        'enableBoostOrderButton',
        'boostOrderCustomQuantity',
        'boostOrderCustomValue',
        'activeBoostOrderOnKeyPress',
        'customKeyPressBoostOrder',
        'enableMatchingBuyOrderButton',
        'matchingBuyOrderCustomQuantity',
        'activeMatchingBuyOrderOnKeyPress',
        'customKeyPressMatchingBuyOrder',
        'enableJustOneCentButton',
        'justOneCentCustomQuantity',
        'activeJustOneCentOnKeyPress',
        'customKeyPressJustOneCent',
        'organizeButtonsLayout',
        'autoRefreshPageAfterSetNewBuyOrder',
        'automaticallyAjustBuyOrderQuantityWithAvaibleMoney',
        'changeBuyOrdersBackgroundIfNotHighestBuyOrder',
        'buyOrdersBackgroundColorTrue',
        'buyOrdersBackgroundColorFalse',
        'changeBuyOrdersBorderIfNotHighestBuyOrder',
        'buyOrdersBorderStyle',
        'buyOrdersBorderColorTrue',
        'buyOrdersBorderColorFalse',
        'buyOrdersEnableProfitCalculator',
        'buyOrdersShowCurrentFees',
        'itemPageCopyItemPriceToClipboard',
        'buyOrdersCopyItemNameToClipboard',
        'enableOtherMarketplacesPrices',
        'enableSteamPrices',
        'enableBackPackTfPrices',
        'enableBuff163Prices',
        'enableBuffMarketPrices',
        'enableBitSkinsPrices',
        'enableBitskinsPrices',
        'enableCsDealsPrices',
        'enableCsMoneyPrices',
        'enableCsTradePrices',
        'enableCsgoFloatPrices',
        'enableDMarketPrices',
        'enableGamerPayPrices',
        'enableLootFarmPrices',
        'enableLisSkinsPrices',
        'enableManncoStorePrices',
        'enableMarketCsgoPrices',
        'enableSwapGgPrices',
        'enableShadowPayPrices',
        'enableSkinBaronPrices',
        'enableSkinBidPrices',
        'enableSkinportPrices',
        'enableTf2TmPrices',
        'enableTradeitGgPrices',
        'enableWaxpeerPrices'
      ],
      (result) => {
        // MainBtn
        setEnableItemPageEnhancer(result.enableItemPageEnhancer !== undefined ? result.enableItemPageEnhancer : true);
        setItemPageSmallFixes(result.itemPageSmallFixes !== undefined ? result.itemPageSmallFixes : true);
        setOpenCsgoSkinInSwap(result.openCsgoSkinInSwap !== undefined ? result.openCsgoSkinInSwap : true);
        setItemPageGoToTopOfPage(result.itemPageGoToTopOfPage !== undefined ? result.itemPageGoToTopOfPage : true);

        setItemPageRemoveSalesGraph(result.itemPageRemoveSalesGraph !== undefined ? result.itemPageRemoveSalesGraph : false);
        setItemPageMinimizeSalesGraphButton(result.itemPageMinimizeSalesGraphButton !== undefined ? result.itemPageMinimizeSalesGraphButton : true);
        setItemPageSalesGraphDefaultStance(result.itemPageSalesGraphDefaultStance !== undefined ? result.itemPageSalesGraphDefaultStance : 'minimized');

        setEnableBoostOrderButton(result.enableBoostOrderButton !== undefined ? result.enableBoostOrderButton : true);
        setBoostOrderCustomQuantity(result.boostOrderCustomQuantity !== undefined ? result.boostOrderCustomQuantity : 0);
        setBoostOrderCustomValue(result.boostOrderCustomValue !== undefined ? result.boostOrderCustomValue : -0.01);
        setActiveBoostOrderOnKeyPress(result.activeBoostOrderOnKeyPress !== undefined ? result.activeBoostOrderOnKeyPress : false);
        setCustomKeyPressBoostOrder(result.customKeyPressBoostOrder !== undefined ? result.customKeyPressBoostOrder : '');

        setHideItemInfo(result.hideItemInfo !== undefined ? result.hideItemInfo : true);
        setHideItemInfoDefaultStance(result.hideItemInfoDefaultStance !== undefined ? result.hideItemInfoDefaultStance : 'minimized');

        setEnableMatchingBuyOrderButton(result.enableMatchingBuyOrderButton !== undefined ? result.enableMatchingBuyOrderButton : false);
        setMatchingBuyOrderCustomQuantity(result.matchingBuyOrderCustomQuantity !== undefined ? result.matchingBuyOrderCustomQuantity : 0);
        setActiveMatchingBuyOrderOnKeyPress(result.activeMatchingBuyOrderOnKeyPress !== undefined ? result.activeMatchingBuyOrderOnKeyPress : false);
        setCustomKeyPressMatchingBuyOrder(result.customKeyPressMatchingBuyOrder !== undefined ? result.customKeyPressMatchingBuyOrder : '');

        setEnableJustOneCentButton(result.enableJustOneCentButton !== undefined ? result.enableJustOneCentButton : true);
        setJustOneCentCustomQuantity(result.justOneCentCustomQuantity !== undefined ? result.justOneCentCustomQuantity : 50);
        setActiveJustOneCentOnKeyPress(result.activeJustOneCentOnKeyPress !== undefined ? result.activeJustOneCentOnKeyPress : false);
        setCustomKeyPressJustOneCent(result.customKeyPressJustOneCent !== undefined ? result.customKeyPressJustOneCent : '');

        setOrganizeButtonsLayout(result.organizeButtonsLayout !== undefined ? result.organizeButtonsLayout : true);
        setAutoRefreshPageAfterSetNewBuyOrder(result.autoRefreshPageAfterSetNewBuyOrder !== undefined ? result.autoRefreshPageAfterSetNewBuyOrder : true);
        setAutomaticallyAjustBuyOrderQuantityWithAvaibleMoney(result.automaticallyAjustBuyOrderQuantityWithAvaibleMoney !== undefined ? result.automaticallyAjustBuyOrderQuantityWithAvaibleMoney : true);

        setChangeBuyOrdersBackgroundIfNotHighestBuyOrder(result.changeBuyOrdersBackgroundIfNotHighestBuyOrder !== undefined ? result.changeBuyOrdersBackgroundIfNotHighestBuyOrder : false);
        setBuyOrdersBackgroundColorFalse(result.buyOrdersBackgroundColor !== undefined ? result.buyOrdersBackgroundColor : '#52a447');
        setBuyOrdersBackgroundColorTrue(result.buyOrdersBackgroundColor !== undefined ? result.buyOrdersBackgroundColor : '#c61a09');

        setChangeBuyOrdersBorderIfNotHighestBuyOrder(result.changeBuyOrdersBorderIfNotHighestBuyOrder !== undefined ? result.changeBuyOrdersBorderIfNotHighestBuyOrder : true);
        setBuyOrdersBorderStyle(result.buyOrdersBorderStyle !== undefined ? result.buyOrdersBorderStyle : 'groove');
        setBuyOrdersBorderColorTrue(result.buyOrdersBorderColorTrue !== undefined ? result.buyOrdersBorderColorTrue : '#52a447');
        setBuyOrdersBorderColorFalse(result.buyOrdersBorderColorFalse !== undefined ? result.buyOrdersBorderColorFalse : '#c61a09');

        setBuyOrdersEnableProfitCalculator(result.buyOrdersEnableProfitCalculator !== undefined ? result.buyOrdersEnableProfitCalculator : true);
        setBuyOrdersShowCurrentFees(result.buyOrdersShowCurrentFees !== undefined ? result.buyOrdersShowCurrentFees : true);

        setitemPageCopyItemPriceToClipboard(result.itemPageCopyItemPriceToClipboard !== undefined ? result.itemPageCopyItemPriceToClipboard : true);
        setBuyOrdersCopyItemNameToClipboard(result.buyOrdersCopyItemNameToClipboard !== undefined ? result.buyOrdersCopyItemNameToClipboard : true);

        setEnableOtherMarketplacesPrices(result.enableOtherMarketplacesPrices !== undefined ? result.enableOtherMarketplacesPrices : true);
        setEnableSteamPrices(result.enableSteamPrices !== undefined ? result.enableSteamPrices : true);
        setEnableBackPackTfPrices(result.enableBackPackTfPrices !== undefined ? result.enableBackPackTfPrices : false);
        setEnableBuff163Prices(result.enableBuff163Prices !== undefined ? result.enableBuff163Prices : true);
        setEnableBuffMarketPrices(result.enableBuffMarketPrices !== undefined ? result.enableBuffMarketPrices : true);
        setEnableBitSkinsPrices(result.enableBitSkinsPrices !== undefined ? result.enableBitSkinsPrices : true);
        setEnableBitskinsPrices(result.enableBitskinsPrices !== undefined ? result.enableBitskinsPrices : true);
        setEnableCsDealsPrices(result.enableCsDealsPrices !== undefined ? result.enableCsDealsPrices : true);
        setEnableCsMoneyPrices(result.enableCsMoneyPrices !== undefined ? result.enableCsMoneyPrices : true);
        setEnableCsTradePrices(result.enableCsTradePrices !== undefined ? result.enableCsTradePrices : true);
        setEnableCsgoFloatPrices(result.enableCsgoFloatPrices !== undefined ? result.enableCsgoFloatPrices : true);
        setEnableDMarketPrices(result.enableDMarketPrices !== undefined ? result.enableDMarketPrices : true);
        setEnableGamerPayPrices(result.enableGamerPayPrices !== undefined ? result.enableGamerPayPrices : true);
        setEnableLootFarmPrices(result.enableLootFarmPrices !== undefined ? result.enableLootFarmPrices : true);
        setEnableLisSkinsPrices(result.enableLisSkinsPrices !== undefined ? result.enableLisSkinsPrices : true);
        setEnableManncoStorePrices(result.enableManncoStorePrices !== undefined ? result.enableManncoStorePrices : false);
        setEnableMarketCsgoPrices(result.enableMarketCsgoPrices !== undefined ? result.enableMarketCsgoPrices : true);
        setEnableSwapGgPrices(result.enableSwapGgPrices !== undefined ? result.enableSwapGgPrices : true);
        setEnableShadowPayPrices(result.enableShadowPayPrices !== undefined ? result.enableShadowPayPrices : true);
        setEnableSkinBaronPrices(result.enableSkinBaronPrices !== undefined ? result.enableSkinBaronPrices : true);
        setEnableSkinBidPrices(result.enableSkinBidPrices !== undefined ? result.enableSkinBidPrices : true);
        setEnableSkinportPrices(result.enableSkinportPrices !== undefined ? result.enableSkinportPrices : true);
        setEnableTf2TmPrices(result.enableTf2TmPrices !== undefined ? result.enableTf2TmPrices : true);
        setEnableTradeitGgPrices(result.enableTradeitGgPrices !== undefined ? result.enableTradeitGgPrices : true);
        setEnableWaxpeerPrices(result.enableWaxpeerPrices !== undefined ? result.enableWaxpeerPrices : true);
      }
    );
  };

  return (
    <div>
      <div>
        <h2 className='title'> Item Page Configurations </h2>
      </div>

      <CreateSwitch
        enableSettingName={enableItemPageEnhancer}
        storageKey="enableItemPageEnhancer"
        text="Enable Item Page Enhancer:"
        setEnableSettingName={setEnableItemPageEnhancer}
        enableDisabledOption={false}
      />

      <Divider>
        <h3>Boost Order Button</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={enableBoostOrderButton}
        storageKey="enableBoostOrderButton"
        text="Enable 'Boost Order' Button ( Auto creates an buy order with +0.01 cents )"
        setEnableSettingName={setEnableBoostOrderButton}
        enableDisabledOption={!enableItemPageEnhancer}
      />

      <CreateValueBox
        enableSettingName={boostOrderCustomQuantity}
        storageKey="boostOrderCustomQuantity"
        text="Custom Quantity for 'Boost Order' Button orders"
        setEnableSettingName={setBoostOrderCustomQuantity}
        enableDisabledOption={!enableBoostOrderButton}
        allowPositive={true}
        allowNegative={false}
        step={1}
        minValue={0}
        maxValue={Infinity}
      />

      <CreateValueBox
        enableSettingName={boostOrderCustomValue}
        storageKey="boostOrderCustomValue"
        text="Custom value increaser for 'Boost Order' Button orders (default +0.01)"
        setEnableSettingName={setBoostOrderCustomValue}
        enableDisabledOption={!enableBoostOrderButton}
        allowPositive={true}
        allowNegative={false}
        step={0.01}
        minValue={0}
        maxValue={Infinity}
      />

      <CreateSwitch
        enableSettingName={activeBoostOrderOnKeyPress}
        storageKey="activeBoostOrderOnKeyPress"
        text="Active 'Boost Order' Button on keyboard keypress"
        setEnableSettingName={setActiveBoostOrderOnKeyPress}
        enableDisabledOption={!enableBoostOrderButton}
      />

      <CreateTextBox
        enableSettingName={customKeyPressBoostOrder}
        storageKey="customKeyPressBoostOrder"
        text="Chose the key to activate the 'Boost Order'"
        setEnableSettingName={setCustomKeyPressBoostOrder}
        enableDisabledOption={!enableBoostOrderButton}
      />
      <Divider>
        <h3>Matching Buy Order Button</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={enableMatchingBuyOrderButton}
        storageKey="enableMatchingBuyOrderButton"
        text="Enable Matching Buy Order Button"
        setEnableSettingName={setEnableMatchingBuyOrderButton}
        enableDisabledOption={!enableItemPageEnhancer}
      />
      <CreateValueBox
        enableSettingName={matchingBuyOrderCustomQuantity}
        storageKey="matchingBuyOrderCustomQuantity"
        text="Matching Buy Order Custom Quantity"
        setEnableSettingName={setMatchingBuyOrderCustomQuantity}
        enableDisabledOption={!enableMatchingBuyOrderButton}
        allowPositive={true}
        allowNegative={false}
        step={1}
        minValue={0}
        maxValue={Infinity}
      />
      <CreateSwitch
        enableSettingName={activeMatchingBuyOrderOnKeyPress}
        storageKey="activeMatchingBuyOrderOnKeyPress"
        text="Active Matching Buy Order on Key Press"
        setEnableSettingName={setActiveMatchingBuyOrderOnKeyPress}
        enableDisabledOption={!enableMatchingBuyOrderButton}
      />
      <CreateTextBox
        enableSettingName={customKeyPressMatchingBuyOrder}
        storageKey="customKeyPressMatchingBuyOrder"
        text="Custom Key Press for Matching Buy Order"
        setEnableSettingName={setCustomKeyPressMatchingBuyOrder}
        enableDisabledOption={!activeMatchingBuyOrderOnKeyPress}
      />


      <Divider>
        <h3>Just One Cent Button</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={enableJustOneCentButton}
        storageKey="enableJustOneCentButton"
        text="Enable Just One Cent Button"
        setEnableSettingName={setEnableJustOneCentButton}
        enableDisabledOption={!enableItemPageEnhancer}
      />
      <CreateValueBox
        enableSettingName={justOneCentCustomQuantity}
        storageKey="justOneCentCustomQuantity"
        text="Just One Cent Custom Quantity"
        setEnableSettingName={setJustOneCentCustomQuantity}
        enableDisabledOption={!enableJustOneCentButton}
        allowPositive={true}
        allowNegative={false}
        step={1}
        minValue={0}
        maxValue={Infinity}
      />
      <CreateSwitch
        enableSettingName={activeJustOneCentOnKeyPress}
        storageKey="activeJustOneCentOnKeyPress"
        text="Active Just One Cent on Key Press"
        setEnableSettingName={setActiveJustOneCentOnKeyPress}
        enableDisabledOption={!enableJustOneCentButton}
      />
      <CreateTextBox
        enableSettingName={customKeyPressJustOneCent}
        storageKey="customKeyPressJustOneCent"
        text="Custom Key Press for Just One Cent"
        setEnableSettingName={setCustomKeyPressJustOneCent}
        enableDisabledOption={!activeJustOneCentOnKeyPress}
      />

      <Divider>
        <h3>Buttons Options</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={organizeButtonsLayout}
        storageKey="organizeButtonsLayout"
        text="Organize Buttons Layout"
        setEnableSettingName={setOrganizeButtonsLayout}
        enableDisabledOption={!enableItemPageEnhancer}
      />
      <CreateSwitch
        enableSettingName={autoRefreshPageAfterSetNewBuyOrder}
        storageKey="autoRefreshPageAfterSetNewBuyOrder"
        text="Auto Refresh Page After Setting New Buy Order"
        setEnableSettingName={setAutoRefreshPageAfterSetNewBuyOrder}
        enableDisabledOption={!enableItemPageEnhancer}
      />
      <CreateSwitch
        enableSettingName={automaticallyAjustBuyOrderQuantityWithAvaibleMoney}
        storageKey="automaticallyAjustBuyOrderQuantityWithAvaibleMoney"
        text="Automatically Adjust Buy Order Quantity with Available Money"
        setEnableSettingName={setAutomaticallyAjustBuyOrderQuantityWithAvaibleMoney}
        enableDisabledOption={!enableItemPageEnhancer}
      />


      <Divider>
        <h3>Page Settings:</h3>
      </Divider>


      <CreateSwitch
        enableSettingName={hideItemInfo}
        storageKey="hideItemInfo"
        text="Add a button to minimize item info sidebar"
        setEnableSettingName={setHideItemInfo}
        enableDisabledOption={!enableItemPageEnhancer}
      />

      <CreateSelector
        enableSettingName={hideItemInfoDefaultStance}
        storageKey="hideItemInfoDefaultStance"
        text="Buy Orders Border Style"
        setEnableSettingName={setHideItemInfoDefaultStance}
        enableDisabledOption={!changeBuyOrdersBorderIfNotHighestBuyOrder}
        options={['minimized', 'open']}
      />

      <CreateSwitch
        enableSettingName={changeBuyOrdersBackgroundIfNotHighestBuyOrder}
        storageKey="changeBuyOrdersBackgroundIfNotHighestBuyOrder"
        text="Change Buy Orders Background If Not Highest Buy Order"
        setEnableSettingName={setChangeBuyOrdersBackgroundIfNotHighestBuyOrder}
        enableDisabledOption={!enableItemPageEnhancer}
      />
      <CreateColorPicker
        enableSettingName={buyOrdersBackgroundColorTrue}
        storageKey="buyOrdersBackgroundColorTrue"
        text="Buy Orders Background Color (True)"
        setEnableSettingName={setBuyOrdersBackgroundColorTrue}
        enableDisabledOption={!changeBuyOrdersBackgroundIfNotHighestBuyOrder}
      />
      <CreateColorPicker
        enableSettingName={buyOrdersBackgroundColorFalse}
        storageKey="buyOrdersBackgroundColorFalse"
        text="Buy Orders Background Color (False)"
        setEnableSettingName={setBuyOrdersBackgroundColorFalse}
        enableDisabledOption={!changeBuyOrdersBackgroundIfNotHighestBuyOrder}
      />
      <CreateSwitch
        enableSettingName={changeBuyOrdersBorderIfNotHighestBuyOrder}
        storageKey="changeBuyOrdersBorderIfNotHighestBuyOrder"
        text="Change Buy Orders Border If Not Highest Buy Order"
        setEnableSettingName={setChangeBuyOrdersBorderIfNotHighestBuyOrder}
        enableDisabledOption={!enableItemPageEnhancer}
      />
      <CreateSelector
        enableSettingName={buyOrdersBorderStyle}
        storageKey="buyOrdersBorderStyle"
        text="Buy Orders Border Style"
        setEnableSettingName={setBuyOrdersBorderStyle}
        enableDisabledOption={!changeBuyOrdersBorderIfNotHighestBuyOrder}
        options={['USD', 'GBP', 'EUR', 'RUB', 'CNY', 'PLN', 'PHP', 'BRL', 'CAD', 'AUD', 'HKD']}
        />

      <CreateColorPicker
        enableSettingName={buyOrdersBorderColorTrue}
        storageKey="buyOrdersBorderColorTrue"
        text="Buy Orders Border Color (True)"
        setEnableSettingName={setBuyOrdersBorderColorTrue}
        enableDisabledOption={!changeBuyOrdersBorderIfNotHighestBuyOrder}
      />
      <CreateColorPicker
        enableSettingName={buyOrdersBorderColorFalse}
        storageKey="buyOrdersBorderColorFalse"
        text="Buy Orders Border Color (False)"
        setEnableSettingName={setBuyOrdersBorderColorFalse}
        enableDisabledOption={!changeBuyOrdersBorderIfNotHighestBuyOrder}
      />

      <CreateSwitch
        enableSettingName={buyOrdersEnableProfitCalculator}
        storageKey="buyOrdersEnableProfitCalculator"
        text="Enable Profit Calculator for Buy Orders"
        setEnableSettingName={setBuyOrdersEnableProfitCalculator}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={buyOrdersShowCurrentFees}
        storageKey="buyOrdersShowCurrentFees"
        text="Show Current Fees for Buy Orders"
        setEnableSettingName={setBuyOrdersShowCurrentFees}
        enableDisabledOption={!buyOrdersEnableProfitCalculator}
      />

      <CreateSwitch
        enableSettingName={itemPageCopyItemPriceToClipboard}
        storageKey="itemPageCopyItemPriceToClipboard"
        text="Copy Item Price to Clipboard"
        setEnableSettingName={setitemPageCopyItemPriceToClipboard}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={buyOrdersCopyItemNameToClipboard}
        storageKey="buyOrdersCopyItemNameToClipboard"
        text="Copy Item Name to Clipboard (Buy Orders)"
        setEnableSettingName={setBuyOrdersCopyItemNameToClipboard}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={itemPageSmallFixes}
        storageKey="itemPageSmallFixes"
        text="Enable Small Fixes on Item Page"
        setEnableSettingName={setItemPageSmallFixes}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={openCsgoSkinInSwap}
        storageKey="openCsgoSkinInSwap"
        text="Open CSGO Skin in Swap"
        setEnableSettingName={setOpenCsgoSkinInSwap}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={itemPageGoToTopOfPage}
        storageKey="itemPageGoToTopOfPage"
        text="Scroll to Top of Page on Item Page"
        setEnableSettingName={setItemPageGoToTopOfPage}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={itemPageRemoveSalesGraph}
        storageKey="itemPageRemoveSalesGraph"
        text="Remove Sales Graph on Item Page"
        setEnableSettingName={setItemPageRemoveSalesGraph}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={itemPageMinimizeSalesGraphButton}
        storageKey="itemPageMinimizeSalesGraphButton"
        text="Minimize Sales Graph Button on Item Page"
        setEnableSettingName={setItemPageMinimizeSalesGraphButton}
        enableDisabledOption={itemPageRemoveSalesGraph}
      />

      <CreateSelector
        enableSettingName={itemPageSalesGraphDefaultStance}
        storageKey="itemPageSalesGraphDefaultStance"
        text="Default Stance for Sales Graph on Item Page"
        setEnableSettingName={setItemPageSalesGraphDefaultStance}
        enableDisabledOption={itemPageRemoveSalesGraph}
        options={['minimized', 'maximized']}
      />

      <Divider>
        <h3>Show prices from Marketplaces Settings:</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={enableOtherMarketplacesPrices}
        storageKey="enableOtherMarketplacesPrices"
        text="Show prices from multiple marketplaces to compare "
        setEnableSettingName={setEnableOtherMarketplacesPrices}
        enableDisabledOption={false}
      />
      <CreateSwitch
        enableSettingName={enableSteamPrices}
        storageKey="enableSteamPrices"
        text="Enable Steam Prices"
        setEnableSettingName={setEnableSteamPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableBackPackTfPrices}
        storageKey="enableBackPackTfPrices"
        text="Enable Backpack.tf Prices"
        setEnableSettingName={setEnableBackPackTfPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableBuff163Prices}
        storageKey="enableBuff163Prices"
        text="Enable Buff163 Prices"
        setEnableSettingName={setEnableBuff163Prices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableBuffMarketPrices}
        storageKey="enableBuffMarketPrices"
        text="Enable BuffMarket Prices"
        setEnableSettingName={setEnableBuffMarketPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableBitSkinsPrices}
        storageKey="enableBitSkinsPrices"
        text="Enable BitSkins Prices"
        setEnableSettingName={setEnableBitSkinsPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableBitskinsPrices}
        storageKey="enableBitskinsPrices"
        text="Enable Bitskins Prices"
        setEnableSettingName={setEnableBitskinsPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableCsDealsPrices}
        storageKey="enableCsDealsPrices"
        text="Enable CS.Deals Prices"
        setEnableSettingName={setEnableCsDealsPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableCsMoneyPrices}
        storageKey="enableCsMoneyPrices"
        text="Enable CS.Money Prices"
        setEnableSettingName={setEnableCsMoneyPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableCsTradePrices}
        storageKey="enableCsTradePrices"
        text="Enable CS.Trade Prices"
        setEnableSettingName={setEnableCsTradePrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableCsgoFloatPrices}
        storageKey="enableCsgoFloatPrices"
        text="Enable CSGOFloat Prices"
        setEnableSettingName={setEnableCsgoFloatPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableDMarketPrices}
        storageKey="enableDMarketPrices"
        text="Enable DMarket Prices"
        setEnableSettingName={setEnableDMarketPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableGamerPayPrices}
        storageKey="enableGamerPayPrices"
        text="Enable GamerPay Prices"
        setEnableSettingName={setEnableGamerPayPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableLootFarmPrices}
        storageKey="enableLootFarmPrices"
        text="Enable LootFarm Prices"
        setEnableSettingName={setEnableLootFarmPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableLisSkinsPrices}
        storageKey="enableLisSkinsPrices"
        text="Enable LIS.skins Prices"
        setEnableSettingName={setEnableLisSkinsPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableManncoStorePrices}
        storageKey="enableManncoStorePrices"
        text="Enable Mannco.Store Prices"
        setEnableSettingName={setEnableManncoStorePrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableMarketCsgoPrices}
        storageKey="enableMarketCsgoPrices"
        text="Enable Market.csgo Prices"
        setEnableSettingName={setEnableMarketCsgoPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableSwapGgPrices}
        storageKey="enableSwapGgPrices"
        text="Enable Swap.gg Prices"
        setEnableSettingName={setEnableSwapGgPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableShadowPayPrices}
        storageKey="enableShadowPayPrices"
        text="Enable ShadowPay Prices"
        setEnableSettingName={setEnableShadowPayPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableSkinBaronPrices}
        storageKey="enableSkinBaronPrices"
        text="Enable SkinBaron Prices"
        setEnableSettingName={setEnableSkinBaronPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableSkinBidPrices}
        storageKey="enableSkinBidPrices"
        text="Enable SkinBid Prices"
        setEnableSettingName={setEnableSkinBidPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableSkinportPrices}
        storageKey="enableSkinportPrices"
        text="Enable Skinport Prices"
        setEnableSettingName={setEnableSkinportPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableTf2TmPrices}
        storageKey="enableTf2TmPrices"
        text="Enable TF2.tm Prices"
        setEnableSettingName={setEnableTf2TmPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableTradeitGgPrices}
        storageKey="enableTradeitGgPrices"
        text="Enable Tradeit.gg Prices"
        setEnableSettingName={setEnableTradeitGgPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <CreateSwitch
        enableSettingName={enableWaxpeerPrices}
        storageKey="enableWaxpeerPrices"
        text="Enable Waxpeer Prices"
        setEnableSettingName={setEnableWaxpeerPrices}
        enableDisabledOption={!enableOtherMarketplacesPrices}
      />

      <ScrollToTopButton />


    </div>
  );
};

export default ItemPageSettings;
