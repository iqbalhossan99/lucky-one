import React from 'react';
import CartItem from './Cart-item/CartItem';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart)
    let imgs = [];
    let names = [];
    for(const product of cart){
        // imgs.push(product.img);
        names.push(product.name);
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
                // imgs.map(img => <CartItem img={img}></CartItem>)
                
            }
            {
                names.map(name => <CartItem name={name}></CartItem>)
            }
            
            <button onClick={ () => handleChooseBtn(names)} className='choose-btn'>CHOOSE 1 FOR ME</button>
            
        </div>
    );
};

export default Cart;