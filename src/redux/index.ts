import { createStore, combineReducers } from 'redux';
import AppStateReducer from './AppState';
import AppStateType from './AppState/AppStateTypes';

const reducer = combineReducers({
  AppState: AppStateReducer,
});

const store = createStore(reducer);

export interface RootState {
  AppState: AppStateType;
}

export default store;
