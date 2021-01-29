import React from 'react';
import MenuList from './MenuList';

interface Props {
  menu: any;
  toggleState: (doc: any) => void;
}

const SetMenu = ({ menu, toggleState }: Props) => {
  return <MenuList menuList={menu} toggleState={toggleState} />;
};

export default SetMenu;
