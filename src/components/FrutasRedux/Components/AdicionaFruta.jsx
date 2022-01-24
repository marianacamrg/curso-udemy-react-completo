import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../actions/frutas.action';

const AdicionaFruta = () => {

    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const dispatch = useDispatch();

    const adicionarFruta = event => {
        event.preventDefault();

        const fruta = {
            id: new Date(),
            nome,
            quantidade
        }

        dispatch(actions.adicionar(fruta));
    }

    return (
        <form onSubmit={adicionarFruta}>
            <input
                type="text"
                name={nome}
                placeholder='Fruta'
                required
                onChange={event => setNome(event.target.value)}
            />

            <input
                type="number"
                name={quantidade}
                placeholder='Quantidade'
                required
                onChange={event => setQuantidade(event.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AdicionaFruta;