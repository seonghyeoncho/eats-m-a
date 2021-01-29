import * as AppState from './AppStateTypes';
const login: (user: any) => AppState.Action = (user: any) => {
  return {
    type: AppState.ActionTypes.LOGIN,
    payload: {
      user: user,
    },
  };
};
