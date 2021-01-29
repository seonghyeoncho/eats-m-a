import React from 'react';
import './LoginPage.scss';

interface Props {
  setLogined: any;
  history: any;
}

const Auth = ({ setLogined, history }: Props) => {
  const toggleState = () => {
    const store = '멘동';
    setLogined((prev: any) => !prev);
    history.push(`/?store=${store}`);
  };

  return (
    <div className="LoginPage">
      <div className="container">
        <p className="title">LOGIN</p>
        <button onClick={toggleState}>로그인</button>
      </div>
    </div>
  );
};

export default Auth;
