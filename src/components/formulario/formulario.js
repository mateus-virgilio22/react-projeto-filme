import React from 'react';
import './formulario.css';

function Formulario() {

    const handleSignupForm = (event) => {
        event.preventDefault()
    }

    return (
        <div className="container_form">
            <form onSubmit={handleSignupForm}>
                <h2>Preencha o formulário abaixo</h2>
                <label id="nome">Digite seu nome:</label>
                <input type="text" id="nome" required />
                <label id="email">Digite seu e-mail:</label>
                <input type="email" id="email" required />
                <label id="numero">Digite seu número:</label>
                <input type="number" id="numero" placeholder="(xx) xxxxx-xxxx" required />
                <label id="data">Data de nascimento:</label>
                <input type="date" id="data" />
                <label id="sexo">Selecione seu sexo:</label>
                <input type="radio" id="sexoM" name="sexo" value="SM"/> Masculino
                <input type="radio" id="sexoF" name="sexo" value="SF"/> Feminino
                <textarea cols="30" rows="10" placeholder="Deixe sua sugestão/opinião"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;