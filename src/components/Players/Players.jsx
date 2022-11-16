import React, { useState } from 'react';
import PlayerCard from '../Playercard/Playercard';

const Players = () => {
    const [players, setPlayers] = useState([]);

    fetch('cricketer.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    function handleAddPlayer(props) {
        console.log('Player Added', props);
    }
    return (
        <div className='col-md-8'>
            <div className='row'>
                {
                    players.map(player => <PlayerCard key={player.unique_id} player={player} handleAddPlayer={handleAddPlayer}></PlayerCard>)
                }
            </div>
        </div>
    );
};

export default Players;
