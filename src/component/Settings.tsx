import React from 'react';
import queryString from 'query-string';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSetting from './MenuSetting';
import InfoSetting from './InfoSetting';
import StoreSetting from './StoreSetting';
import '../scss/Setting.scss';

const Settings = () => {
  const store = queryString.parse(window.location.search).store;
  const [state, setState] = useState<number>(1);

  const changePage = (n: number) => {
    if (n === 0) {
      return <InfoSetting />;
    } else if (n === 1) {
      return <MenuSetting store={store} />;
    } else {
      return <StoreSetting />;
    }
  };

  return (
    <div className="setting-con">
      <div className="setting-box">
        <div>{store}</div>
      </div>
      <div className="setting-nav-con">
        <Link to={`/?store=${store}`}>
          <div className="back-bt">뒤로가기</div>
        </Link>
        {state === 1 ? (
          <div className="setting-nav-menu-a" onClick={() => setState(1)}>
            <div>메뉴 관리</div>
          </div>
        ) : (
          <div className="setting-nav-menu" onClick={() => setState(1)}>
            <div>메뉴 관리</div>
          </div>
        )}
        {/* {state === 2 ? <div className="setting-nav-store-a" onClick={()=>setState(2)}><div>가게 관리</div></div>
                    : <div className="setting-nav-store" onClick={()=>setState(2)}><div>가게 관리</div></div>}
                {state === 0 ? <div className="setting-nav-info-a" onClick={()=>setState(0)}><div>개인 정보 관리</div></div>
                    : <div className="setting-nav-info" onClick={()=>setState(0)}><div>개인 정보 관리</div></div>} */}
      </div>
      <div className="setting-content-con">{changePage(state)}</div>
    </div>
  );
};
export default Settings;
