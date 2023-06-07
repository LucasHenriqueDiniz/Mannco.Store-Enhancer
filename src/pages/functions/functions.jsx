/*global chrome*/

import React from 'react';
import { message, InputNumber, Input, Select, Switch, ColorPicker } from 'antd';

const CreateValueBox = ({
  enableSettingName,
  storageKey,
  text,
  setEnableSettingName,
  enableDisabledOption,
  allowPositive,
  allowNegative,
  step,
  minValue,
  maxValue
}) => {
  const saveCurrentSetting = (name, value) => {
    chrome.storage.sync.set(
      {
        [name]: value
      },
      () => {
        message.success(`${name} was set to ${value}`);
    }
    );
  };

  const handleValueChange = (value) => {
    if ((allowPositive && value >= 0) || (allowNegative && value <= 0)) {
      setEnableSettingName(value);
      saveCurrentSetting(storageKey, value);
    }
  };

  return (
    <div className='configuration-item' id={enableSettingName}>
      <span>{text}</span>
      <InputNumber
        className='value-box-func'
        disabled={enableDisabledOption}
        value={enableSettingName}
        onChange={handleValueChange}
        min={minValue}
        max={maxValue}
        step={step}
        precision={2}
        formatter={(value) =>
          (allowNegative || value >= 0) ? `${value}` : `-${Math.abs(value)}`
        }
        parser={(value) =>
          (allowNegative || value >= 0) ? value.replace(/[^0-9.-]/g, '') : `-${value.replace(/[^0-9.]/g, '')}`
        }
      />
    </div>
  );
};


const CreateTextBox = ({
    enableSettingName,
    storageKey,
    text,
    setEnableSettingName,
    enableDisabledOption,
  }) => {
    const saveCurrentSetting = (name, value) => {
      chrome.storage.sync.set(
        {
          [name]: value
        },
        () => {
            message.success(`${name} was set to ${value}`);
        }
      );
    };
  
    return (
      <div className='configuration-item' id={enableSettingName}>
        <span>{text}</span>
        <Input
        className='text-box-func'
          disabled={enableDisabledOption}
          value={enableSettingName}
          onChange={(e) => {
            setEnableSettingName(e.target.value);
            saveCurrentSetting(storageKey, e.target.value);
          }}
        />
      </div>
    );
  };

const CreateSwitch = ({ enableSettingName,storageKey , text, setEnableSettingName, enableDisabledOption }) => {

    const saveCurrentSetting = (key, value) => {
      chrome.storage.sync.set(
        {
          [key]: value
        },
        () => {
          message.success(`${key} was set to ${value}`);
        }
      );
    };
  
    return (
      <div className='configuration-item' id={enableSettingName}>
        <span>{text}</span>
        <Switch
        className='switch-func'
          disabled={enableDisabledOption}
          checked={enableSettingName}
          onChange={(checked) => {
            setEnableSettingName(checked);
            saveCurrentSetting(storageKey , checked);
          }}
        />
      </div>
    );
  };

  const CreateColorPicker = ({ enableSettingName, storageKey, text, setEnableSettingName, enableDisabledOption }) => {
    const saveCurrentSetting = (name, value) => {
      chrome.storage.sync.set(
        {
          [name]: value
        },
        () => {
            message.success(`${name} was set to ${value}`);
        }
      );
    };
  
    return (
      <div className='configuration-item' id={enableSettingName}>
        <span>{text}</span>
        <ColorPicker
          className='color-picker-func'
          disabled={enableDisabledOption}
          value={enableSettingName}
          color={enableSettingName}
          format={'hex'}
          onChange={(value) => {
            setEnableSettingName(value.toHexString());
            saveCurrentSetting(storageKey, value.toHexString());
          }}
        />
      </div>
    );
  };

  const { Option } = Select;

  const CreateSelector = ({ enableSettingName, storageKey, text, setEnableSettingName, enableDisabledOption, options }) => {
    const saveCurrentSetting = (name, value) => {
      chrome.storage.sync.set(
        {
          [name]: value
        },
        () => {
            message.success(`${name} was set to ${value}`);
        }
      );
    };
  
    return (
      <div className='configuration-item' id={enableSettingName}>
        <span>{text}</span>
        <Select
          disabled={enableDisabledOption}
          value={enableSettingName}
          onChange={(value) => {
            setEnableSettingName(value);
            saveCurrentSetting(storageKey, value);
          }}
        >
          {options.map((option) => (    
            <Option key={option} value={option} className='selector-func'>
              {option}
            </Option>
          ))}
        </Select>
      </div>
    );
  };

  export { CreateSwitch, CreateTextBox, CreateValueBox, CreateColorPicker, CreateSelector };
