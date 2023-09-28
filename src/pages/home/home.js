import React from 'react';
import './home.css';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import Sinopse from '../../components/sinopse/sinopse';
import CARD_1 from '../../assets/imagens/personagem1.jpeg';
import CARD_2 from '../../assets/imagens/personagem2.jpg';
import CARD_3 from '../../assets/imagens/personagem3.jpg';

function Home() {
    return (
        <div>
            <Banner />
            <Sinopse />
            <div className="container_card">
                <Card
                name="Benedict - Doutor Estranho"
                img={CARD_1}
                />

                <Card
                name="Marko - Homem areia"
                img={CARD_2}
                />

                <Card
                name="Peter Parker - Homem aranha"
                img={CARD_3}
                />

            </div>
        </div>
    );
}

export default Home;