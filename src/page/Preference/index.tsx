import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PreferenceSideBar } from '../../component';
import './index.scss';
import PreferenceMenuPage from './Menu/PreferenceMenuPage';
import PreferenceStorePage from './PreferenceStorePage';

interface props {}

const PreferenceRouter: React.FC<props> = (props) => {
  return (
    <div className="PreferencePage">
      <PreferenceSideBar />
      <Route
        exact
        path="/preference/store"
        component={() => <PreferenceStorePage />}
      />
      <Route
        exact
        path="/preference/menu"
        component={() => <PreferenceMenuPage />}
      />
    </div>
  );
};

export default PreferenceRouter;
