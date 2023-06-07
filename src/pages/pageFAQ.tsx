import React from 'react';
import { useState } from 'react';
import './settings.css';
import noBan from '../images/noBan.png'
import { HeartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

    const FAQpage = () => {
        const [isImageVisible, setImageVisible] = useState(false);

        const toggleImageVisibility = () => {
            setImageVisible(!isImageVisible);
        };

        return (
            <div>
                <div className="title">
                    <h1>
                        <QuestionCircleOutlined /> FAQ <QuestionCircleOutlined />
                    </h1>
                </div>
                <div className="text-faq-row">
                    <div className="semi-title">
                        <strong>[Q]</strong> <span>I've got a good idea. How can I suggest/send it to you?</span>
                    </div>
                    <div className="text-faq-answer">
                        <strong>[A]</strong> <span>You can reach me by email at <a href="mailto:lucas.hdo@hotmail.com">lucas.hdo@hotmail.com</a>, via Discord at <a href="https://discord.com/channels/@me/" rel="noreferrer" target="_blank">Amaya#7744</a>, or through GitHub (the project is open source). Feel free to send your suggestions using any of these methods. I will gladly consider them for future updates. Thank you!</span>
                    </div>
                    <Divider />
                </div>
                <div className="text-faq-row">
                    <div className="semi-title">
                        <strong>[Q]</strong> <span>I've found a bug. How can I send it to you?</span>
                    </div>
                    <div className="text-faq-answer">
                        <strong>[A]</strong> <span>You can email me at <a href="mailto:lucas.hdo@hotmail.com">lucas.hdo@hotmail.com</a>, contact me via Discord at <a href="https://discord.com/channels/@me/" rel="noreferrer" target="_blank">Amaya#7744</a>, or create an issue on the <a href="https://github.com/LucasHenriqueDiniz" rel="noreferrer" target="_blank">GitHub page</a>. I will check it out as quickly as possible.</span>
                    </div>
                    <Divider />
                </div>
                <div className="text-faq-row">
                    <div className="semi-title">
                        <strong>[Q]</strong> <span>I want <strong>'Mannco.Store Enhancer'</strong> to run in my language. How can I submit translations?</span>
                    </div>
                    <div className="text-faq-answer">
                        <strong>[A]</strong> <span>In development ;/</span>
                        {/* <strong>[A]</strong> <span>You can download these two files: <a href="../_locales/en/controls.json" target="_blank">function strings</a> and <a href="../_locales/en/translation.json" target="_blank">extension strings</a>. Edit them using any text editor program, and email us your translations at <a href="mailto:csinvhelp@gmail.com">csinvhelp@gmail.com</a>.</span> */}
                    </div>
                    <Divider />
                </div>
                <div className="text-faq-row">
                    <div className="semi-title">
                        <strong>[Q]</strong> <span>Will I get banned for using this extension?</span>
                    </div>
                    <div className="text-faq-answer">
                        <strong>[A]</strong> <span>No, you won't.</span>
                    </div>
                    <button onClick={toggleImageVisibility}>
                        Toggle Image <HeartOutlined />
                    </button>
                    {isImageVisible && (
                        <img src={noBan} alt="proving my innocence D:" />
                    )}
                </div>
            </div>
        );
    };

    export default FAQpage;
