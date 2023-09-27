import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div>
            <div className="card">
                <img className="card_img" src={props.img} alt="" />
                {props.name}
            </div>
        </div>
    );
}

export default Card;