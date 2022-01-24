import { actionsTypes } from "../constants/frutas";

const INITIAL_STATE = {
    frutas: [
        {
            id: 1, 
            nome: 'Uva',
            quantidade: 20
        },
        {
            id: 2, 
            nome: 'Maçã',
            quantidade: 10
        }
    ]
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, {...action.payload}] };
        case actionsTypes.REMOVER_FRUTA:
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id) };
        default:
            return state;
    }
}

export { reducers };