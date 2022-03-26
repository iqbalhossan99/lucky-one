import React from 'react';
import CartItem from './Cart-item/CartItem';
import './Cart.css';

const Cart = ({cart}) => {
    let names = [];
    for(const product of cart){
        names.push(`${product.name}`);
    }

    // handle the choose one button to show a random items
    const handleChooseBtn = (names) => {
        const displayChooseItem = names[Math.floor(Math.random() * names.length)];
        alert(`It will help full for you. You can buy this product:  ${displayChooseItem}`);
        console.log(displayChooseItem)
    }

    return (

        <div className='cart'>
            <h2>Selected Items</h2>

            {
                cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
                
            }
            
            <button onClick={ () => handleChooseBtn(names)} className='choose-btn'>CHOOSE 1 FOR ME</button>
            <button className='again-btn'>Choose Again</button>
        </div>
    );
};

export default Cart;