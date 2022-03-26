import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])

    const handleCartBtn = (product) =>{
        console.log('selected items', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        
            <div className='main-container'>
                <div className='shop-container'>
                    <div className="products-container">{ products.map(product => <Products 
                            key={product.id}
                            product={product}
                            handleCartBtn={handleCartBtn}
                        ></Products>)}
                    </div>
                    <div id='cart' className='cart-container'>
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
                {/* text-section */}
                <div className="text-section">
                    <h2>How does reactJs work?</h2>
                    <p>We know that ReactJs is a javascript library. That is used for mostly client site applications. And it uses JSX syntax which is the same as javascript code. So how is it work?
                    When we create some components with elements use jsx (javaScript XML) in our projects. Then it transfers the code in a compiler(Babel) to convert the JSX code to real javascript code. And then the codes checked/re-rendered by his own Dom (that's called virtual dom) that, are there any component state changes. The changes are reflected in Virtual DOM. Thus, Virtual DOM has the updated state of the component. After that, the react-dom package sends the code in real dom, And then the browser has to repaint each and every element on the screen. Now thus browsers' work has been highly reduced and now it will help us load our app faster!</p>
                    
                    <h2>What is the Difference between Props and State?</h2>
                    <div className='props-vs-state'>
                        <div className=''>
                            <h3>Props</h3>
                            <ol>
                                <li>Props are read-only.</li>
                                <li>Props are immutable.</li>
                                <li>Props allow you to pass data from one component to other components as an argument.</li>
                                <li>Props can be accessed by the child component.</li>
                                <li>5.Props are used to communicate between components.</li>
                                <li>A stateless component can have Props.</li>
                                <li>7.Props make components reusable.</li>
                            </ol>
                        </div>
                        <div>
                            <h3>State</h3>
                            <ol>
                                <li>State changes can be asynchronous.</li>
                                <li>State is mutable.</li>
                                <li>State holds information about the components.</li>
                                <li>State cannot be accessed by child components.</li>
                                <li>States can be used for rendering dynamic changes with the component.</li>
                                <li>Stateless components cannot have State.</li>
                                <li>The state cannot make components reusable.</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Shop;