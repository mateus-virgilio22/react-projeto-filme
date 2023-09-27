import React from 'react';
import Logo from '../../assets/imagens/logo.png';
import './header.css';

function Header() {
    return (
        <div>
            <header>

                <div className="content-logo">
                    <img className="logo" src={Logo} alt="Logo" />
                </div>

                <nav>
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Fotos</li></a>
                        <a href="#"><li>Comentários</li></a>
                        <a href="#"><li>Contato</li></a>
                    </ul>
                </nav>

            </header>
        </div>
    );
}

export default Header;