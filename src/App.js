import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'Mariana Camargo',
        email: 'marianacamrg@gmail.com',
        data: new Date(1999, 4, 14),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Carlos Daniel',
        email: 'carlos@gmail.com',
        data: new Date(1999, 12, 20),
        mensagem: 'Olá, tudo bem sim e com você?'
      }
    ]
  }

  adicionarComentario = () => {
    const novoComentario = {
        nome: 'Maria',
        email: 'maria@gmail.com',
        data: new Date(1999, 6, 16),
        mensagem: 'Olá pessoal'
    }
    this.setState({
      comentarios: [ ...this.state.comentarios, novoComentario]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>
        {this.state.comentarios.map((comentario, indice)=> (
          <Comentario 
          key= {indice}
          nome={comentario.nome}
          email={comentario.email}
          data={comentario.data}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionarComentario}>Adicionar um comentário</button>
      </div>
    );
  }
}

export default App;
