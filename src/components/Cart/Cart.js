import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // This component has bugs with calculation issues
    const totalCost = cart.reduce((total, current) => {
        if(!current.quantity) {
            current.quantity = 1;
        }
        return total + (current.price * current.quantity);
    }, 0)


    let totalItems = cart.reduce((totalItem, current) => {
        if(!current.quantity) {
            current.quantity = 1
        }
        return totalItem + current.quantity;
    }, 0);

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalItems}</h5>
            <p>Total Price: {totalCost}</p>
        </div>
    );
};

export default Cart;