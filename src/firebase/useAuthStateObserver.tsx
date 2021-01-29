import { useEffect } from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import * as AppState from '../redux/AppState/AppStateTypes';

function useAuthStateObserver() {
  const dispatch = useDispatch();
  useEffect(() => {
    let unregisterAuthObserver: any;
    unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      //set state
      if (!!user) {
        dispatch({
          type: AppState.ActionTypes.LOGIN,
          payload: {
            user: user,
          },
        });
      } else {
        dispatch({
          type: AppState.ActionTypes.LOGOUT,
        });
      }
    });

    return () => {
      unregisterAuthObserver();
    };
  });
}

export default useAuthStateObserver;
