import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Settings from '../component/Settings';
import { useSelector } from 'react-redux';
import useAuthStateObserver from '../firebase/useAuthStateObserver';
import { RootState } from '../redux';

const RootRouter = () => {
  useAuthStateObserver();

  const loggedin = useSelector((state: RootState) => state.Auth.loggedin);

  return (
    <Router>
      {loggedin ? (
        <>
          <Route exact path="/" component={() => <HomePage />} />
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
