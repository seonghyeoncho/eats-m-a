import React, { useEffect, useState } from 'react';
import { Menu, Radio } from 'antd';
import queryString from 'query-string';
import { dbService } from '../../firebase';
import './index.scss';
import NewOrderList from '../../component/NewOrderList';
import CompleteOrderList from '../../component/CompleteOrderList';
import { Table } from '../../types';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import { DashboardSideBar } from '../../component';
import NewOrder from './NewOrderPage';
import TableViewPage from './TableViewPage';

const DashbaordRouter = () => {
  const query = queryString.parse(window.location.search);

  const [newOrderList, setNewOrderList] = useState<any>([]);
  const [comOrderList, setComOrderList] = useState<any>([]);
  const [state, setState] = useState<number>(0);
  const [radio, setRadio] = useState<any>(0);
  const [page, setPage] = useState<number>(1);

  const onChangeRadio = (e: any) => {
    setRadio(e.target.value);
  };

  const toggleCheck = (t: string) => {
    newOrderList.map((doc: Table) => {
      if (doc.myTable === t) {
        dbService
          .collection(`${query.store}`)
          .doc(`${t}`)
          .update({ state: true });
      }
    });
  };

  const getOrders = (orderState: string) => {
    setNewOrderList([]);
    setComOrderList([]);

    dbService
      .collection(`${query.store}`)
      .orderBy(`${orderState}`)
      .onSnapshot((snapShot) => {
        snapShot.forEach((doc: any) => {
          if (!doc.data().state && doc.data().orderStatus) {
            const tableObj = {
              myTable: doc.id,
              orderList: doc.data().bucket,
              orderStatus: doc.data().orderStatus,
              state: doc.data().state,
              totalPrice: doc.data().totalPrice,
            };
            setNewOrderList((prev: any) => [tableObj, ...prev]);
          } else {
            const tableObj = {
              myTable: doc.id,
              orderList: doc.data().bucket,
              orderStatus: doc.data().orderStatus,
              state: doc.data().state,
              totalPrice: doc.data().totalPrice,
            };

            setComOrderList((prev: any) => [tableObj, ...prev]);
          }
        });
      });
  };

  useEffect(() => {
    if (radio === 0) {
      getOrders('orderAt');
    } else {
      getOrders('orderAt_R');
    }
    return function cleanUp() {};
  }, [radio]);

  // console.log(newOrderList);
  // console.log(comOrderList);

  const listState = () => {
    if (state === 0)
      return (
        <NewOrderList
          table={newOrderList}
          toggleCheck={toggleCheck}
          indexNumber={page}
        />
      );
    else return <CompleteOrderList table={comOrderList} />;
  };

  return (
    <div className="HomePage">
      <div className="main">
        <DashboardSideBar
          store={query.store}
          onClickNewMenu={() => {
            setState(0);
            setPage(1);
          }}
          onClickCompleted={() => {
            setState(1);
          }}
        />

        <div className="plane">
          {state === 0 ? <NewOrder /> : <TableViewPage />}
        </div>
        {/* <div className="infoBar">
            <div className="radioDiv">
              <Radio.Group onChange={onChangeRadio} value={radio}>
                <Radio value={0}>최신 주문순</Radio>
                <Radio value={1}>과거 주문순</Radio>
              </Radio.Group>
            </div>
            <div className="timer"></div>
          </div>
          <hr className="infoHr" />

          <div>{listState()}</div>
          <div className="pageButton">
            <LeftCircleOutlined
              className="circleButton"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            />
            <h1>
              {page}/{Math.ceil(newOrderList.length / 3)}
            </h1>
            <RightCircleOutlined
              className="circleButton"
              onClick={() => {
                if (page < newOrderList.length / 3 + 1) {
                  setPage(page + 1);
                }
              }}
            />
          </div>
          <hr /> */}
      </div>
    </div>
  );
};

export default DashbaordRouter;
