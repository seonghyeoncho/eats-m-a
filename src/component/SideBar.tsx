import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
import { firebaseInstance } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../redux/actions';

interface props {
  store: any;
  onClickNewMenu: any;
  onClickCompleted: any;
}

const SideBar: React.FC<props> = (props) => {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleOnClickNewMenu = () => {
    setSelected(0);
    props.onClickNewMenu();
  };

  const handleOnClickCompleted = () => {
    setSelected(1);
    props.onClickCompleted();
  };

  const handleOnClickLogout = () => {
    firebaseInstance
      .auth()
      .signOut()
      .then(() => {
        dispatch(AuthAction.initiateLogout());
      })
      .catch((error) => {
        alert(error);
      });
  };

  const log = () => {
    console.log(state);
  };

  return (
    <div className="SideBar">
      <div
        className={`btn ${selected === 0 ? 'selected' : ''}`}
        onClick={handleOnClickNewMenu}
      >
        새로운 주문
      </div>
      <div
        className={`btn ${selected === 1 ? 'selected' : ''}`}
        onClick={handleOnClickCompleted}
      >
        접수 완료
      </div>
      <Link className="menuBtn" to={`/setting/?store=${props.store}`}>
        메뉴관리
      </Link>
      <div className="logout-btn" onClick={handleOnClickLogout}>
        로그아웃
      </div>
      <div onClick={log}>log</div>
    </div>
  );
};

export default SideBar;
