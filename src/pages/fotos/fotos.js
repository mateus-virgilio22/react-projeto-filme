import React from 'react';
import './fotos.css';
import Card from '../../components/card/card';
import Foto_1 from '../../assets/imagens/personagem1.jpeg';
import Foto_2 from '../../assets/imagens/personagem2.jpg';
import Foto_3 from '../../assets/imagens/personagem3.jpg';

function Fotos() {
    return (
        <div className="container_fotos">
            <h2>Fotos</h2>
            <div className="container_card">
                <Card
                    name="Doutor Estranho"
                    img = {Foto_1}
                />
                <Card
                    name="Homem Areia"
                    img = {Foto_2}
                />
                <Card
                    name="Homem Aranha"
                    img = {Foto_3}
                />
            </div>
        </div>
    );
}

export default Fotos;