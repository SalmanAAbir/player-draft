import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import PlayerCard from '../Playercard/Playercard';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('cricketer.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, []);
    
    function handleAddPlayer(props) {
        console.log('Player Added', props);
        const newCart = [...cart, props];
    }
    return (
        
        <div className='row'>
        <div className='col-md-8'>
            <div className='row'>
                {
                    players.map(player => <PlayerCard key={player.unique_id} player={player} handleAddPlayer={handleAddPlayer}></PlayerCard>)
                }
            </div>
        </div>
        
        <Cart cart={cart}/>
        </div>
    );
};

export default Players;
