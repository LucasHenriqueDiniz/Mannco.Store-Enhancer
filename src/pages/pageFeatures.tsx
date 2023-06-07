import React from 'react';
import { Divider } from 'antd';
import { TrophyOutlined, InboxOutlined, UserOutlined, ControlOutlined, SmileOutlined } from '@ant-design/icons';


const featuresPage = () => {
    return (
        <div>
            <div className='title'>
                <h1><TrophyOutlined /> Features <TrophyOutlined /></h1>
            </div>
            <Divider>
                <h2><ControlOutlined /> Item Page Enhancer</h2>
            </Divider>
            <ul>
                <li>
                    Configuration menu: The extension includes a configuration menu where you can customize the displayed features, their values, and options.
                </li>
                <li>
                    Boost Order: This button automatically places an order for the item you are viewing at a price of 1 cent.
                </li>
                <li>
                    Buy for One Cent: This button automatically places an order for the item you are viewing at the highest available price plus 1 cent.
                </li>
                <li>
                    Create Matching Order: This button creates a buy order that matches the lowest available sell order for the item you are viewing.
                </li>
                <li>
                    Adjustable order quantity: You can adjust the quantity of the items you are buying, and the extension will even suggest the optimal quantity based on your available funds.
                </li>
                <li>
                    Refresh page after order placement: The page automatically refreshes after an order is placed to ensure that the latest data is displayed.
                </li>
                <li>
                    Background color change for no buy order: The background color of the buy order menu changes depending on whether you have an active buy order or not.
                </li>
                <li>
                    Marketplace price indicator: The extension shows the current price for the item you are viewing on different sites (DMarket, Steam, Bitskins, Loot.farm, etc.). For CS:GO items, it uses CSGOSkins, and for others, it makes a standalone API call to retrieve the current price.
                </li>
                <li>
                    Scroll to top button: This button allows you to quickly scroll back to the top of the page.
                </li>
                <li>
                    Fees and profit calculator: The extension includes a calculator that can help you determine the fees and potential profit for the items you are viewing.
                </li>
                <li>
                    Graph menu hide/minimize button: You can easily hide or minimize the price graph menu for the item you are viewing.
                </li>
                <li>
                    Item price copy to the clipboard button: You can easily copy the price for the item you are viewing.
                </li>
                <li>
                    Open on swap.gg button: A button to open the CS:GO skin you are viewing in the swap.gg item inspect.
                </li>
                <li>
                    Maximize/minimize item status: Minimize the status for the item, reducing unnecessary information on the screen.
                </li>
                <li>
                    Other small fixes: The extension includes various small fixes and improvements to make your browsing experience smoother.
                </li>
                <li>
                    In-development features: The following features are currently in development:
                    <ul>
                        <li>Menu showing prices from backpack.tf, as well as potentially other sites.</li>
                        <li>Beautification of the header on the page.</li>
                        <li>Option to execute the buttons via keyboard keypress.</li>
                    </ul>
                </li>
            </ul>
            <Divider>
                <h2><SmileOutlined /> Giveaway Enhancer</h2>
            </Divider>
            <ul>
                <li>
                    A button for each giveaway to easily join or leave without needing to enter the giveaway page.
                </li>
                <li>
                    All giveaways displayed on one page, removing the need for navigation tabs.
                </li>
                <li>
                    A button for showing how many giveaways you are missing. Clicking on the button will take you to the missing giveaway.
                </li>
                <li>
                    A border around all giveaways, indicating whether you have already joined them or not.
                </li>
            </ul>
            <Divider>
                <h2><UserOutlined /> Profile Enhancer</h2>
            </Divider>
            <ul>
                <li>
                    Remove All Buy Orders button.
                </li>
                <li>
                    Excel export for Buy Orders.
                </li>
                <li>
                    Excel export for Transactions.
                </li>
            </ul>
            <Divider>
                <h2><SmileOutlined /> Giveway Enhancer</h2>
            </Divider>
            <ul>
                <li>
                    ...
                </li>
            </ul>
            <Divider>
                <h2><InboxOutlined /> Inventory Enhancer</h2>
            </Divider>
            <ul>
                <li>
                    ...
                </li>
            </ul>
        </div>
    );
};

export default featuresPage;
