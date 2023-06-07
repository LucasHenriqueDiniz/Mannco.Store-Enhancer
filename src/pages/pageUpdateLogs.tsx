import React from 'react';
import './settings.css';
import { Divider } from 'antd';
import { ExperimentOutlined } from '@ant-design/icons';

const UpdateLogsPage = () => {

    return (
        <div>
            <div className='title'>
                <h1><ExperimentOutlined /> Enhancer updates <ExperimentOutlined /></h1>
            </div>
            <Divider>
            <h2>Release Notes and Changelog</h2>
            </Divider>
            <div className="note">
                <h3 className='version-text'>Version 1.0:</h3>
                <div className="cnt">
                    <ul>
                        <li><b className='update-type-text'>Realease:</b>
                            <ul>
                                <li><b>Mannco.store Enhancer:</b>
                                    <ul>
                                        <li>Realeased extension to google extensions store.</li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <Divider/>

            <div>...</div>

        </div>

    );
};

/* 
EXEMPLE UPDATE
<div class="cnt">
    <ul>
      <li><b>Update:</b>
        <ul>
          <li><b>Inventory:</b>
            <ul>
              <li>The cost of stickers in the inventory is displayed again. If the item's float is loaded, then the sticker prices are queried from our database. If not, you will need to make a request to Steam</li>
              <li>Fixed a bug where SIH Black subscribers could not click on certain buttons in the Bulk item sales window</li>
              <li>If there is no price provider available in the game, there will be no button to select the price providers</li>
              <li>Fixed a bug where item selection would not reset after inventory refresh</li>
            </ul>
          </li>
          <li><b>Item page:</b>
            <ul>
              <li>Edited the alignment in the category selection dropdown menu to add to favorites</li>
            </ul>
          </li>
          <li><b>Extension window:</b>
            <ul>
              <li>Added horizontal scrolling of categories in the Favorites tab</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Join our Discord - <a href="https://discord.gg/a3Hn8nZsBg" target="_blank">https://discord.gg/a3Hn8nZsBg</a></li>
    </ul>
  </div>
*/

export default UpdateLogsPage;