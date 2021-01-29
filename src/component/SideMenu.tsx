import React from 'react';
import MenuList from './MenuList';

interface Props {
  menu: any;
  toggleState: (doc: any) => void;
}

const SideMenu = ({ menu, toggleState }: Props) => {
  return <MenuList menuList={menu} toggleState={toggleState} />;
};

export default SideMenu;
