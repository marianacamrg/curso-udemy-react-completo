import React from 'react';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome="Mariana" email="marianacamrg@gmail.com" data={new Date(1999, 4, 14)}>
        Olá, tudo bem?
      </Comentario>
      <Comentario nome="Natalia" email="natalia@gmail.com" data={new Date(1999, 1, 17)}>
        Olá, tudo certo e com você?
      </Comentario>
      <Comentario nome="Carlos" email="carlos@gmail.com" data={new Date(1999, 12, 20)}>
        Olá, tudo certo por aqui
      </Comentario>
    </div>
  );
}

export default App;
