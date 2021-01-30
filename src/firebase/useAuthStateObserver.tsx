import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthAction } from '../redux/actions';
import firebase from 'firebase';

function useAuthStateObserver() {
  const dispatch = useDispatch();
  console.log('[firebase] initiating useAuthStateObserver');

  useEffect(() => {
    let unregisterAuthObserver: any;
    unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      console.log('[useAuthStateObserver] login state changed');
      console.log(user);
      if (!!user) {
        console.log('login detected');
        console.log(AuthAction.loginSuccess());
        dispatch(AuthAction.loginSuccess());
      } else {
        console.log('logout detected');
        dispatch(AuthAction.logoutSuccess());
      }
    });

    return () => {
      unregisterAuthObserver();
    };
  });
}

export default useAuthStateObserver;
