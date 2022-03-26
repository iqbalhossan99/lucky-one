import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    console.log(props)
    const {img, name} = props.cartItem;
    return (
        <div>
            <div className='cart-item'>
                <div className='selected-img'><img src={img} alt="" /></div> 
                <p>{name}</p>
                <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default CartItem;