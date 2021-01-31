import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { RootState } from '../../redux';

interface props {}

const AuthRouter: React.FC<props> = (props) => {
  return (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  );
};

export default AuthRouter;
