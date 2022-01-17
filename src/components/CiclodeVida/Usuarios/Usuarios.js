import React, { Component } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: [
        { id: 1, nome: 'João', sobrenome: 'Silva', email: 'joao@mail.com' },
        { id: 2, nome: 'Maria', sobrenome: 'Santos', email: 'maria@mail.com' }
      ]
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }

  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {

    fetch(`https://reqres.in/api/users/${usuario.id}`, {
      method: 'DELETE',
    })
    .then(resposta => {
      let usuarios = this.state.usuarios
      usuarios = usuarios.filter(x => x.id !== usuario.id)
      this.setState({ usuarios: usuarios })
    })
  }
}

  componentDidMount() {

    fetch('https://reqres.in/api/users')
      .then(resposta => resposta.json())
      .then(dados => {
        const usuarios = dados.data.map(usuario => {
          return {
            id: usuario.id,
            nome: usuario.first_name,
            sobrenome: usuario.last_name,
            email: usuario.email
          }
        })
        this.setState({ usuarios: usuarios })
      })
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Usuarios