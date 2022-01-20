import React, { Component } from 'react';
import { Routes, Link, Route } from 'react-router-dom';

import './App.css';
import AdicionarComentario from './components/Comentarios/AdicionarComentario/index';
import CicloVida from './components/CiclodeVida/CicloVida';
import Home from './components/Home/index';

class App extends Component {

  render() {
    return (
      <>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/usuarios">Usuários</Link></li>
                <li><Link to="/comentarios">Comentários</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/usuarios" element={<CicloVida />} />
              <Route path="/comentarios" element={<AdicionarComentario />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }
}

export default App;
