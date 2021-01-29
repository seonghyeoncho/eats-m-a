import React from 'react';
import MenuList from './MenuList';

interface Props {
  menu: any;
  toggleState: (doc: any) => void;
}

const MainMenu = ({ menu, toggleState }: Props) => {
  console.log(menu);
  return <MenuList menuList={menu} toggleState={toggleState} />;
};

export default MainMenu;
