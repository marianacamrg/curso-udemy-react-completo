import { combineReducers } from 'redux';
import { reducers as frutasReducers } from '../../components/FrutasRedux/reducers/fruta.reducer';

const reducers =  combineReducers({
    frutasReducers,
});

export { reducers };