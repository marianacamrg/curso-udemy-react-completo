import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Home extends Component {

    render() {
        return (
            <>
                <div className="Home">
                    <main>
                        <h1>Meus Projetos</h1>
                        <h2>Projetos realizados no curso 'React Completo do básico ao avançado' ministrado pelo professor Rafael Calunga</h2>
                        <div className="Menu">
                            <p>Todos os projetos</p>
                            <ul>
                                <li><Link to="/usuarios">Usuários</Link></li>
                                <li><Link to="/comentarios">Comentários</Link></li>
                                <li><Link to="/frutas">Frutas Redux</Link></li>
                                <li><Link to="/formulario">Formulário</Link></li>
                            </ul>
                        </div>
                    </main>
                </div>
            </>
        );
    }
}

export default Home