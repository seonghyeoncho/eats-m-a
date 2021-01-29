import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './HomePage';
import LoginPage from './LoginPage';
import Settings from '../component/Settings';
import { useSelector } from 'react-redux';
import useAuthStateObserver from '../firebase/useAuthStateObserver';

const RootRouter = () => {
  useAuthStateObserver();
  const loggedin = useSelector((state: any) => state.AppState.user !== null);

  return (
    <Router>
      {loggedin ? (
        <>
          <Route exact path="/" component={() => <App />} />
          <Route exact path="/setting" component={() => <Settings />} />
        </>
      ) : (
        <Route
          exact
          path="/"
          component={(props: any) => <LoginPage history={props.history} />}
        />
      )}
    </Router>
  );
};

export default RootRouter;
