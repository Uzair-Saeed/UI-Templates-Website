import React, { useState } from 'react';
import './index.css';

const Header = () => {
    const [underline, setUnderline] = useState({
        objectActive: null,
        items: ['HOME', 'CUSTOM DESIGN', 'TEMPLATES', 'BLOG', 'CONTACT US']
    })

    return <>
        <div className='flex-container'>
            <div className='logo'>
                VISO UX
            </div>
            <div className='search'>
                <div className='icon'>
                    <i className="fa fa-search"></i>
                </div>
                <div className='input'>
                    <input type="text" placeholder='Search here...' />
                </div>
            </div>
            <div className='topnav'>
                <ul className='flex-container'>
                    {underline.items.map((items) =>
                    (<li key={items}>
                        {items}
                    </li>))}
                    <li style={{ fontWeight: 100 }}></li>
                </ul>
            </div>
            <div className='line'>
                <div className='underline'></div>
            </div>
        </div>
    </>;
};

export default Header;
