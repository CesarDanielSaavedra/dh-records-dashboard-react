import React from 'react';

import reactLogo from '../assets/react.svg';
import dhRecordsLogo from '../assets/dh-records.svg';
import viteLogo from '/vite.svg';

const Footer = () => {

    return(
        <div>
            <div>
                <a href="http://localhost:3030/" target="_blank">
                <img src={dhRecordsLogo} className="logo react" alt="dhRecords logo" />
                </a>
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>DH-Records + Vite + React</h1>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default Footer;