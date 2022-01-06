import React from 'react';
import './Comentario.css';

const Comentario = (props) => (
    <div className="Comentario">
      <h2>{props.nome}</h2>
      <p>{props.email}</p>
      <p>{props.data.toString()}</p>
      <p>{props.children}</p>
    </div>
);

export default Comentario;