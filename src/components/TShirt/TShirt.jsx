import React from 'react';
import './TShirt.css'
const TShirt = ({ tshirt, handleAddToCart }) => {
    const { name, picture, price } = tshirt;
    // console.log(tshirt)
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;