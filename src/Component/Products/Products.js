import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css';

const Products = ({handleCartBtn, product}) => {
    const {img, name, price} = product
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>{name}</p>
            <h5>Price: {price}</h5>
            <button onClick={ () => handleCartBtn(product)}>Add To Cart     <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Products;