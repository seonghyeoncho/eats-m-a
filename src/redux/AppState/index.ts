import * as AppState from './AppStateTypes';

const initialState: AppState.default = {
  user: null,
};

const AppStateReducer = (state = initialState, action: AppState.Action) => {
  switch (action.type) {
    case AppState.ActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };
    case AppState.ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default AppStateReducer;
