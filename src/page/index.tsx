import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashbaordRouter from './Dashboard';
import LoginPage from './Auth/LoginPage';
import Settings from '../component/Settings';
import { useDispatch, useSelector } from 'react-redux';
import useAuthStateObserver from '../firebase/useAuthStateObserver';
import { RootState } from '../redux';
import { Header, Loading } from '../component';
import './index.scss';
import PreferenceRouter from './Preference';
import HomeRouter from './Home';
import AuthRouter from './Auth';
import { StoreAction } from '../redux/actions';

const RootRouter = () => {
  useAuthStateObserver();

  const loggedin = useSelector((state: RootState) => state.Auth.loggedin);
  const isGlobalLoading = useSelector(
    (state: RootState) => state.UI.isGlobalLoading
  );

  const AuthFlowRouter = () => {
    return (
      <Router>
        {loggedin ? (
          <>
            <Header />
            <Route path="/" component={() => <HomeRouter />} />
            <Route path="/dashboard" component={() => <DashbaordRouter />} />
            <Route exact path="/setting" component={() => <Settings />} />
            <Route path="/preference" component={() => <PreferenceRouter />} />
          </>
        ) : (
          <>
            <Route path="/" component={(props: any) => <AuthRouter />} />
            <Route
              exact
              path="/login"
              component={(props: any) => <LoginPage history={props.history} />}
            />
          </>
        )}
      </Router>
    );
  };

  return (
    <div id="appContainer">
      {isGlobalLoading ? <Loading.GlobalLoading /> : <AuthFlowRouter />}
    </div>
  );
};

export default RootRouter;
