import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/imagens/logo.png';
import './header.css';

function Header() {

    const navigate = useNavigate();

    return (
        <div>
            <header>

                <div className="content-logo">
                    <img className="logo" src={Logo} alt="Logo" />
                </div>

                <nav>
                    <ul>
                        <li onClick = {() => navigate('/')}>Home</li>
                        <li onClick = {() => navigate('fotos')}>Fotos</li>
                        <li onClick = {() => navigate('comentarios')}>Comentários</li>
                        <li>Contato</li>
                    </ul>
                </nav>

            </header>
        </div>
    );
}

export default Header;