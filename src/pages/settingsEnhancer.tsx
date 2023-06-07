/*global chrome*/

import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import './settings.css';
import { CreateSwitch, CreateColorPicker, CreateSelector, CreateValueBox, CreateTextBox } from "./functions/functions.jsx"

const EnhancerSettings = () => {
    
    const [choseDefaultCurrency, setChoseDefaultCurrency] = useState(true);
    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = () => {
        chrome.storage.sync.get(
            [
                'choseDefaultCurrency',
            ],
            (result) => {
                setChoseDefaultCurrency(result.choseDefaultCurrency !== undefined ? result.choseDefaultCurrency : true);

            }
        );
    };

return (
    <div>
        <div className='title'>
            <h1>Enhancer Settings</h1>
        </div>
        <CreateSelector
        enableSettingName={choseDefaultCurrency}
        storageKey="choseDefaultCurrency"
        text="Buy Orders Border Style"
        setEnableSettingName={setChoseDefaultCurrency}
        enableDisabledOption={false}
        options={['USD', 'GBP', 'EUR', 'RUB', 'CNY', 'PLN', 'PHP', 'BRL', 'CAD', 'AUD', 'HKD']}
        />

    </div>

);
};

export default EnhancerSettings;