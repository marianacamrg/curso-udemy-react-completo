import { combineReducers } from 'redux';
import { reducers as frutaReducers } from './fruta.reducer';

const reducers = combineReducers({
  frutaReducers,
});

export { reducers };