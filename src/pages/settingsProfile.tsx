/*global chrome*/

import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';

import './settings.css';
import { CreateSwitch/*, CreateColorPicker, CreateSelector, CreateValueBox, CreateTextBox */} from "./functions/functions.jsx"
import ScrollToTopButton from "./functions/scrollToTop.jsx"


const Profile = () => {
  //MainBtn
  const [enableProfileEnhancer, setEnableProfileEnhancer] = useState(true);
  //My buy orders
  const [enableRemoveAllBuyOrderButton, setEnableRemoveAllBuyOrderButton] = useState(true);
  const [enableExportBuyOrderButton, setEnableExportBuyOrderButton] = useState(true);
  const [saveAllBuyOrders, setSaveAllBuyOrders] = useState(false);
  //Transaction history
  const [enableExportTransactionHistoryButton, setEnableExportTransactionHistoryButton] = useState(true);
  //smallfixes
  const [profileSmallFixes, setProfileSmallFixes] = useState(false);


  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    chrome.storage.sync.get(
      [
        'enableProfileEnhancer',
        'enableRemoveAllBuyOrderButton',
        'enableExportBuyOrderButton',
        'saveAllBuyOrders',
        'enableExportTransactionHistoryButton',
        'profileSmallFixes'
      ],
      (result) => {
        setEnableProfileEnhancer(result.enableProfileEnhancer !== undefined ? result.enableProfileEnhancer : true);
        setEnableRemoveAllBuyOrderButton(result.enableRemoveAllBuyOrderButton !== undefined ? result.enableRemoveAllBuyOrderButton : true);
        setEnableExportBuyOrderButton(result.enableExportBuyOrderButton !== undefined ? result.enableExportBuyOrderButton : true);
        setSaveAllBuyOrders(result.saveAllBuyOrders !== undefined ? result.saveAllBuyOrders : false);
        setEnableExportTransactionHistoryButton(result.enableExportTransactionHistoryButton !== undefined ? result.enableExportTransactionHistoryButton : true);
        setProfileSmallFixes(result.profileSmallFixes !== undefined ? result.profileSmallFixes : false);
      }
    );
  };

  return (
    <div>
      <div>
        <h2 className='title'> Profile page configuration </h2>
      </div>

      <CreateSwitch
        enableSettingName={enableProfileEnhancer}
        storageKey="enableProfileEnhancer"
        text="Enable Profile page Enhancer:"
        setEnableSettingName={setEnableProfileEnhancer}
        enableDisabledOption={false}
      />

      <Divider>
        <h3>Buy Order Configurations</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={enableRemoveAllBuyOrderButton}
        storageKey="enableRemoveAllBuyOrderButton"
        text="Enable 'Remove All Buy Orders' Button (Removes all Buy Orders in one clicks):"
        setEnableSettingName={setEnableRemoveAllBuyOrderButton}
        enableDisabledOption={!enableProfileEnhancer}
      />

      <CreateSwitch
        enableSettingName={enableExportBuyOrderButton}
        storageKey="enableExportBuyOrderButton"
        text="Enable 'Export Buy Orders' Button (Creates an excel file of the Buy Orders):"
        setEnableSettingName={setEnableExportBuyOrderButton}
        enableDisabledOption={!enableProfileEnhancer}
      />

      <CreateSwitch
        enableSettingName={saveAllBuyOrders}
        storageKey="saveAllBuyOrders"
        text="Save All Buy Orders: ( in development ):"
        setEnableSettingName={setSaveAllBuyOrders}
        enableDisabledOption={!enableProfileEnhancer}
      />

      <Divider>
        <h3>Transactions History Configurations</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={enableExportTransactionHistoryButton}
        storageKey="enableExportTransactionHistoryButton"
        text="Enable 'Export Transaction History' Button ( creates and excel file of all your transactions ):"
        setEnableSettingName={setEnableExportTransactionHistoryButton}
        enableDisabledOption={!enableProfileEnhancer}
      />

      <Divider>
        <h3>Miscs Configurations</h3>
      </Divider>

      <CreateSwitch
        enableSettingName={profileSmallFixes}
        storageKey="profileSmallFixes"
        text="Profile Small Fixes:"
        setEnableSettingName={setProfileSmallFixes}
        enableDisabledOption={!enableProfileEnhancer}
      />

      <ScrollToTopButton />



    </div>
  );
};

export default Profile;
