export interface Action {
  type: ActionTypes;
  payload: any;
}

enum ActionTypes {
  LOGIN = 'APP_STATE$LOGIN',
  LOGOUT = 'APP_STATE$LOGOUT',
}

export { ActionTypes };

export default interface AppStateType {
  user: any;
}
