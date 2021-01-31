import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DashbaordRouter from '../Dashboard';

interface props {}

const HomeRouter: React.FC<props> = (props) => {
  return (
    <Redirect
      to={{
        pathname: '/dashboard',
      }}
    />
  );
};

export default HomeRouter;
