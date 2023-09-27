import React from 'react';
import './sinopse.css'
import Video from '../../assets/videos/trailer.mp4';

function Sinopse() {
    return (
        <div className="container_sinopse">

            <div className="content_sinopse_video">
                <video controls>
                    <source src={Video} />
                </video>
            </div>

            <div className="content_sinopse_text">
                <p>Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário.</p>
                <button>Comprar ingresso</button>
            </div>

        </div>
    );
}

export default Sinopse;