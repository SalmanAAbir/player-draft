import React from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';

const Draft = () => {
    return (
        <div className='row'>
            <Players/>
            <Cart/>
        </div>
    );
};

export default Draft;