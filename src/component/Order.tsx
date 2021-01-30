import React, { useState } from 'react';
import { Col } from 'antd';
import '../scss/Order.scss';
interface Props {
  orders: any;
}

const Order = ({ orders }: Props) => {
  // console.log(orders);

  return (
    <div>
      {orders.map((m: any) => (
        <div key={m.id}>
          <div className="orderDiv">
            <div className="tatalInfo">
              <div className="orderInfo">
                <h2 className="menuText">
                  <b>{m.menu}</b>
                </h2>
                <h2 className="countText">
                  <b>{m.count}개</b>
                </h2>
              </div>
              <div className="orderDetail">
                {m.more !== undefined ? (
                  <>
                    {m.more.map((doc: any) => {
                      return <h4 key={doc.menu}>| {doc.menu} </h4>;
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Order;
