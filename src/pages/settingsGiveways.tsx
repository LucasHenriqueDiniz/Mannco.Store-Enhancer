/*global chrome*/

import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';

import './settings.css';
import { CreateSwitch/*, CreateColorPicker, CreateSelector, CreateValueBox, CreateTextBox */} from "./functions/functions.jsx"
import ScrollToTopButton from "./functions/scrollToTop.jsx"

const Giveaway = () => {
  // Giveaway Enhancer
  const [enableGiveawayEnhancer, setEnableGiveawayEnhancer] = useState(true);
  const [showMissingGiveaways, setShowMissingGiveaways] = useState(true);
  const [giveawayBorders, setGiveawayBorders] = useState(false);
  const [quickEnterButton, setQuickEnterButton] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    chrome.storage.sync.get(
      [
        'enableGiveawayEnhancer',
        'showMissingGiveaways',
        'giveawayBorders',
        'quickEnterButton'
      ],
      (result) => {
        setEnableGiveawayEnhancer(result.enableGiveawayEnhancer !== undefined ? result.enableGiveawayEnhancer : true);
        setShowMissingGiveaways(result.showMissingGiveaways !== undefined ? result.showMissingGiveaways : true);
        setGiveawayBorders(result.giveawayBorders !== undefined ? result.giveawayBorders : false);
        setQuickEnterButton(result.quickEnterButton !== undefined ? result.quickEnterButton : true);
      }
    );
  };

  return (
    <div>
      <div>
        <h2 className='title'>Giveaway Settings</h2>
      </div>

      <CreateSwitch
        enableSettingName={enableGiveawayEnhancer}
        storageKey="enableGiveawayEnhancer"
        text="Enable Giveaway Enhancer:"
        setEnableSettingName={setEnableGiveawayEnhancer}
        enableDisabledOption={false}
      />

      <CreateSwitch
        enableSettingName={showMissingGiveaways}
        storageKey="showMissingGiveaways"
        text="Show Missing Giveaways:"
        setEnableSettingName={setShowMissingGiveaways}
        enableDisabledOption={!enableGiveawayEnhancer}
      />

      <CreateSwitch
        enableSettingName={giveawayBorders}
        storageKey="giveawayBorders"
        text="Giveaway Borders:"
        setEnableSettingName={setGiveawayBorders}
        enableDisabledOption={!enableGiveawayEnhancer}
      />

      <CreateSwitch
        enableSettingName={quickEnterButton}
        storageKey="quickEnterButton"
        text="Quick Enter Button:"
        setEnableSettingName={setQuickEnterButton}
        enableDisabledOption={!enableGiveawayEnhancer}
      />

      <ScrollToTopButton />
    </div>
  );
};

export default Giveaway;
