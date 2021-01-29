import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import MainMenu from './MainMenu';
import SetMenu from './SetMenu';
import SideMenu from './SideMenu';
interface Props {
  store: string | string[] | null;
}
const MenuSetting = ({ store }: Props) => {
  const s = Number(window.localStorage.getItem('state'));
  const [data, setData] = useState<any>({});
  const [addMenu, setAddMenu] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [state, setState] = useState<number>(s);
  const [menu, setMenu] = useState<any>([]);
  console.log(s, state);
  console.log(menu);

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'menu') {
      setAddMenu(value);
    } else if (name === 'price') {
      setPrice(value);
    }
  };

  const toggleState = (m: any) => {
    const toggleObj = {
      menu: m.menu,
      price: m.price,
      state: !m.state,
    };

    const toggledMenu = menu.map((doc: any) =>
      doc.menu === m.menu ? toggleObj : doc
    );

    if (s === 0) {
      dbService.collection('store').doc(`${store}`).update({
        menu: toggledMenu,
      });
    } else if (s === 1) {
      dbService.collection('store').doc(`${store}`).update({
        setmenu: toggledMenu,
      });
    } else {
      dbService.collection('store').doc(`${store}`).update({
        sidemenu: toggledMenu,
      });
    }
  };

  // const removeMenu = (m:string) => {
  //     const removedObj = menu.filter((doc:any) => doc.menu !== m );
  //     dbService.collection('store').doc(`${store}`).update({
  //         'menu':removedObj
  //     })
  // };

  const changeMenuList = (s: number) => {
    if (s === 0) return <MainMenu menu={menu} toggleState={toggleState} />;
    else if (s === 1) return <SetMenu menu={menu} toggleState={toggleState} />;
    else return <SideMenu menu={menu} toggleState={toggleState} />;
  };

  const onSubmit = (event: any) => {
    event.preventDefault();

    const array = menu.concat({
      menu: addMenu,
      price: Number(price),
      state: true,
    });

    if (s === 0) {
      dbService.collection('store').doc(`${store}`).update({
        menu: array,
      });
    } else if (s === 1) {
      dbService.collection('store').doc(`${store}`).update({
        setmenu: array,
      });
    } else {
      dbService.collection('store').doc(`${store}`).update({
        sidemenu: array,
      });
    }

    setAddMenu('');
    setPrice(0);
  };
  const setS = (n: number) => {
    window.localStorage.setItem('state', `${n}`);
  };

  useEffect(() => {
    dbService
      .collection('store')
      .doc(`${store}`)
      .onSnapshot((snapShot: any) => {
        const data = snapShot.data();
        if (s === 0) setMenu(data.menu);
        else if (s === 1) setMenu(data.setmenu);
        else setMenu(data.sidemenu);
      });
  }, [s]);

  return (
    <div className="menusetting-con">
      <div className="menusetting-nav-con">
        {s === 0 ? (
          <button className="menusetting-nav-main-a">단품 메뉴</button>
        ) : (
          <button
            className="menusetting-nav-main"
            onClick={() => {
              setState(0);
              setMenu(data.menu);
              setS(0);
            }}
          >
            단품 메뉴
          </button>
        )}
        {s === 1 ? (
          <button className="menusetting-nav-set-a">세트 메뉴</button>
        ) : (
          <button
            className="menusetting-nav-set"
            onClick={() => {
              setState(1);
              setMenu(data.setmenu);
              setS(1);
            }}
          >
            세트 메뉴
          </button>
        )}
        {s === 2 ? (
          <button className="menusetting-nav-side-a">사이드 메뉴</button>
        ) : (
          <button
            className="menusetting-nav-side"
            onClick={() => {
              setState(2);
              setMenu(data.sidemenu);
              setS(2);
            }}
          >
            사이드 메뉴
          </button>
        )}

        <div className="background-box-menusetting"></div>
      </div>

      <div className="menusetting-title-con">
        <div className="menusetting-title-state">상태</div>
        <div className="menusetting-title-menu">메뉴명</div>
        <div className="menusetting-title-price">가격</div>
      </div>

      {changeMenuList(s)}

      <div className="menusetting-content-con">
        <div>메뉴 추가</div>

        <form onSubmit={onSubmit}>
          <input
            name="menu"
            placeholder="메뉴 이름"
            value={addMenu}
            onChange={onChange}
            required
          ></input>
          <input
            name="price"
            placeholder="가격"
            value={price}
            onChange={onChange}
            required
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};
export default MenuSetting;
