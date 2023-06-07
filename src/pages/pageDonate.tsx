import React from 'react';
import './settings.css';
import { HeartOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const DonatePage = () => {
    return (
        <div>
            <div className='title'>
                <h1>
                    <HeartOutlined /> Support the Project <HeartOutlined />
                </h1>
            </div>
            <Divider>
                <h2 className='semi-title'>Ways to Contribute</h2>
            </Divider>
            <p style={{textAlign: 'center'}}>
                Thank you for considering supporting the project! Your contribution is greatly appreciated.
                While there is no obligation to help, if you would like to contribute, there are two ways you can do so:
            </p>
            <Divider />
            <h3 className='semi-title'>1. Contribute to the Project</h3>
            <p>
                You can contribute to the project by providing feedback, reporting issues, or even contributing code enhancements.
                If you are interested in contributing to the project, please visit the project's GitHub repository:
            </p>
            <a className='semi-title'  href="https://github.com/LucasHenriqueDiniz" target="_blank" rel="noopener noreferrer">GitHub Repository</a>.

            <h3 className='semi-title'>2. Donate via Steam</h3>
            <p>
                If you would like to make a monetary donation, you can do so by sending a donation through Steam.
                Donations will go towards supporting the project and its ongoing development by buying me coffee and wine.
                You can donate by visiting my Steam profile and sending a trade offer or a gift:
            </p>
            <a className='semi-title' href="https://steamcommunity.com/id/Amayacrab/" target="_blank" rel="noopener noreferrer">Steam Profile Link</a>.
            <Divider />
            <p style={{ fontSize: '2rem', lineHeight: '2rem', textAlign: 'center', marginTop: '2rem' }}>
                Please note that any support, whether it's contributing to the project or making a donation, is entirely optional.
                The project is free and will always remain free for everyone to use.
                Your support is greatly appreciated and helps to motivate and sustain the development of the project.
            </p>
        </div>
    );
};


export default DonatePage;