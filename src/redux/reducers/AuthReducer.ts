import * as AuthAction from '../actions/AuthAction';
import Action from '../Types';

export interface Auth {
  loggedin: false;
}

const initialState: Auth = {
  loggedin: false,
};

const AuthReducer = (state = initialState, action: any) => {
  console.log('[AuthReducer] invoked with type: ' + action.type);
  switch (action.type) {
    case AuthAction.Types.LOGIN_SUCCESS:
      console.log('loggedin true');
      return {
        ...state,
        loggedin: true,
      };
    case AuthAction.Types.LOGOUT_SUCCESS:
      console.log('loggedin false');
      return {
        ...state,
        loggedin: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
