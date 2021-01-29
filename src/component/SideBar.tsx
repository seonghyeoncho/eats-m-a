import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

interface props {
  store: any;
  onClickNewMenu: any;
  onClickCompleted: any;
}

const SideBar: React.FC<props> = (props) => {
  const [selected, setSelected] = useState(0);

  const handleOnClickNewMenu = () => {
    setSelected(0);
    props.onClickNewMenu();
  };

  const handleOnClickCompleted = () => {
    setSelected(1);
    props.onClickCompleted();
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
    </div>
  );
};

export default SideBar;
