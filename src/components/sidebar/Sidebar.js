import React from 'react';
import './index.css';

const Sidebar = () => {
    return <>
        <div className='nav'>
            <div>
                <b>Welcome!</b><br></br>
                Hammad Hassan!
            </div>
            <div>
                <button>New</button>
            </div>
            <div style={{ fontSize: '20px', fontWeight: 100 }}>
                <ul>
                    <li>Templates</li>
                    <li>New Arrivals</li>
                    <li>Categories</li>
                    <li>My Account</li>
                </ul>
            </div>
        </div>
    </>;
};

export default Sidebar;