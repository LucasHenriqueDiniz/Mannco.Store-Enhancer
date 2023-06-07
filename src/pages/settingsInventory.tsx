/*global chrome*/

import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import './settings.css';
import { CreateSwitch, CreateColorPicker, CreateSelector, CreateValueBox, CreateTextBox } from "./functions/functions.jsx"

const InventorySettings = () => {

    const [quickSellManual, setQuickSellManual] = useState(true);
    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = () => {
        chrome.storage.sync.get(
            [
                'quickSellManual',
            ],
            (result) => {
                setQuickSellManual(result.quickSellManual !== undefined ? result.quickSellManual : true);

            }
        );
    };
        return (
            <div>
                <div className='title'>
                    <h1>Inventory Settings</h1>
                </div>
                <CreateSwitch
                    enableSettingName={quickSellManual}
                    storageKey="enableItemPageEnhancer"
                    text="Enable Item Page Enhancer:"
                    setEnableSettingName={setQuickSellManual}
                    enableDisabledOption={false}
                />
            </div>

        );
    };

    export default InventorySettings;