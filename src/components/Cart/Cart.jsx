import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart, 'cart');
    return (
        <div className='col-md-4 mt-4'>
            <h4>Draft Details</h4>
            <ul>
                {cart.length<=5?cart.map(cart => <li key={cart.unique_id}>{cart.unique_id}</li>):<h3>Maximum 5 Players</h3>}
            </ul>

        </div>
    );
};

export default Cart;