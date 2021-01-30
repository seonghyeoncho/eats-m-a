import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appMiddleware } from './middleware/App';
import AuthReducer, { Auth } from './reducers/AuthReducer';

const reducer = combineReducers({
  Auth: AuthReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...appMiddleware))
);

export interface RootState {
  Auth: Auth;
}

export default store;
