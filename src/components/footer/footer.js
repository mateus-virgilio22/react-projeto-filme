import React from 'react';
import './footer.css';
import Logo from '../../assets/imagens/logo.png';

function Footer() {
    return (
        <div>
            <footer>
                <div className="content_footer">
                    <img className="logo_footer" src={Logo} alt="" />
                    <p>Copyright&copy; Mateus Virgílio</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;