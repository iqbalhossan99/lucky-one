import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <div className='logo'> <h2><i>Golden Accessories</i></h2></div>
            <div className='navigation'>
                <ul className='nav-items'>
                    <li className='nav-item'><a href="/shop">Shop</a></li>
                    <li className='nav-item'><a href="#cart">Cart</a></li>
                    <li className='nav-item'><a href="/order-review">Oder Review</a></li>
                </ul>
            </div>
    </div>
    );
};

export default Header;