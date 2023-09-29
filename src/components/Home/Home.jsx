import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])
    // console.log(tShirts)

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            toast.error('this tshirt already added')
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }

    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(tshirt => tshirt._id !== id)
        setCart(remaining)
    }
    return (
        <div className="home-container">
            <div className="t-shirts-container">
                {
                    tshirts.map(tshirt =>
                        <TShirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;