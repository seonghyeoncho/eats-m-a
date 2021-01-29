import React from 'react';
import numberWithCommas from '../functions/addCommaFunc';

interface Props {
  menuList: any;
  toggleState: (doc: any) => void;
}
const MenuList = ({ menuList, toggleState }: Props) => {
  return (
    <div className="mainmenu-con">
      {menuList?.map((doc: any) => {
        return (
          <div className="mainmenu-item-con">
            <div className="mainmenu-item-state-bt">
              {doc.state ? (
                <button onClick={() => toggleState(doc)}>주문 가능</button>
              ) : (
                <button onClick={() => toggleState(doc)}>주문 불가</button>
              )}
            </div>
            <div className="mainmenu-item-info-con">
              <div className="mainmenu-item-menu">{doc.menu}</div>
              <div className="mainmenu-item-price">
                {numberWithCommas(doc.price)}원
              </div>
            </div>

            <div className="mainmenu-item-cancle-bt">
              {/* <button onClick={()=>removeMenu(doc.menu)}>삭제</button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuList;
