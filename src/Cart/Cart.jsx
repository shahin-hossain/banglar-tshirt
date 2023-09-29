import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {

    //conditional rendering
    let massage;
    {/*conditional rendering using if-else*/ }
    if (cart.length === 0) {
        massage = 'Please add Some Products'
    }
    else {
        massage = <div>
            <p><small>Thanks for buy Something</small></p>
        </div>
    }
    return (
        <div>

            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summery: {cart.length}</h2> {/*conditional CSS Class rendering using ternary operator*/}
            <p className={`bold ${cart.length > 2 ? 'green' : 'purple'}`}>Something</p> {/*conditional CSS Class rendering using ternary operator*/}
            {
                cart.length > 2
                    ? <span className='orange'>Buy more for big Discount</span>
                    : <p>You Fokira</p>
            } {/*conditional rendering using ternary operator*/}
            {massage}
            {cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)}
            {cart.length === 2 && <p>Double Bonanza!!!</p>} {/*conditional rendering using  Logical and (&&)*/}
            {cart.length === 3 || <h4>3 ta to hoilo na</h4>}{/*conditional rendering using  Logical or (||)*/}
        </div>
    );
};

export default Cart;

/**
 * Conditional Rendering
 * 1. use if else to set a variable that will contain an element, would be components 
 * 2. ternary operator : condition ? 'for true' : 'for false
 * 3. logical and(&&): if the condition is true then the next thing will be displayed  
 * 4. logical or(||) : if the condition is false then the next thing will be displayed.
*/


/**
 * Conditional CSS Class
 * 1. use Ternary operator
 * 2. use ternary inside template string
*/