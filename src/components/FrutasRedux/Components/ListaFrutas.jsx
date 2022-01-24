import React from 'react';
import { useSelector } from 'react-redux';
import AdicionaFruta from './AdicionaFruta';
import Fruta from './Fruta';

const ListaFrutas = () => {
    const frutas = useSelector(state => state.frutaReducers.frutas);

    return(
        <>
        <h1>Lista de Frutas</h1>

        <AdicionaFruta />

        {frutas.map(fruta => (
            <Fruta hey={fruta.id} fruta={fruta} />
        ))}
        </>
    )
}

export default ListaFrutas