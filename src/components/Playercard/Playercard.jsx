import React from 'react';

const PlayerCard = (props) => {
    const { type,unique_id,date } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className='col-md-4 mt-4'>
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Player ID: {unique_id}</h5>
                    <p className="card-text mb-0">Player Type: {type}</p>
                    <p className="card-text">Date : {date}</p>
                    <button type='button' className="btn btn-primary" onClick={()=> handleAddPlayer(props.player)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;