import React, { useState } from 'react';
import firebase from 'firebase';
import './LoginPage.scss';

interface Props {
  history: any;
}

const Auth = ({ history }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleState = () => {
    // alert(password);
    // const store = '멘동';

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push(`/?store=${'멘동'}`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="LoginPage">
      <div className="container">
        <p className="title">LOGIN</p>
        <input onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={toggleState}>로그인</button>
      </div>
    </div>
  );
};

export default Auth;
