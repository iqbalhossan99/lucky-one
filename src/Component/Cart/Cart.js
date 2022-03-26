import React from 'react';
import CartItem from './Cart-item/CartItem';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart)
    // let imgs = [];
    let names = [];
    for(const product of cart){
        // imgs.push(product.img);
        names.push(product.name);
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
            
            
        </div>
    );
};

export default Cart;