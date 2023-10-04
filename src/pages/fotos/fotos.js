import React from 'react';
import './fotos.css';
import ImageSlider from '../../components/slider/carousel';

function Fotos() {
    return (
        <div className="container_fotos">
            <h2>Fotos</h2>
            <ImageSlider/>
        </div>
    );
}

export default Fotos;