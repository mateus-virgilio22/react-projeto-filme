import React from 'react';
import './banner.css';
import banner from '../../assets/imagens/slide3.png';

function Banner() {
    return (
        <div className='content_banner'>
            <img className="img_banner" src={banner} alt="banner_filme" />
        </div>
    );
}

export default Banner; 