import React, { Component } from 'react';

import Usuarios from './Usuarios/Usuarios';

class CicloVida extends Component {

    render() {
        return <div>
            <h2>Ciclo de Vida - Adicionando Usuários com API</h2>
            <Usuarios />
        </div>
    }

}

export default CicloVida;