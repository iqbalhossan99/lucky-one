import React from 'react';
import './CartItem.css';

const CartItem = ({name}) => {
    console.log()
    return (
        <div>
            <div className='cart-item'>
                {/* <img src={img} alt="" />  */}
                <p>{name}</p>
            </div>
        </div>
    );
};

export default CartItem;