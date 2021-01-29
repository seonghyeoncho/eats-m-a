import React, { useState } from 'react';
import { Col, Card, Popover, Button } from 'antd';
import Order from './Order';
import '../scss/CompleteOrderList.scss';
import numberWithCommas from '../functions/addCommaFunc';
import { createTempVariable } from 'typescript';
import { dbService } from '../firebase';
import queryString from 'query-string';

interface Props {
  table: any;
}

const CompleteOrderList = ({ table }: Props) => {
  const [popoverVisible, setPopoverVisible] = useState<any>({
    tableNum: 0,
    visible: false,
  });
  const [select, setSelect] = useState<any>();

  const onClick = (menu: any) => {
    setSelect(menu);
  };

  return (
    <>
      <div className="row">
        {table.map((m: any) => {
          if (m.state) {
            return (
              <Col span={8}>
                <Card
                  className="orderCard"
                  onClick={() => onClick(m.orderList)}
                >
                  <h1>{`${m.myTable}번 테이블`}</h1>
                  <hr />
                  <>
                    <Order orders={m.orderList.slice(0, 4)} />
                    <h3>상위 4개의 주문만 표시됩니다.</h3>
                    <div className="totalPriceDiv">
                      <hr className="coloredHr" />
                      <h3>총 가격 : {numberWithCommas(m.totalPrice)}</h3>
                    </div>

                    <Popover
                      content={
                        <div className="menuPopover">
                          <Order orders={m.orderList} />
                          <div className="totalPriceDiv">
                            <hr className="coloredHr" />
                            <h3>총 가격 : {numberWithCommas(m.totalPrice)}</h3>
                          </div>
                        </div>
                      }
                      title={
                        <>
                          <Button
                            onClick={() =>
                              setPopoverVisible({
                                table: m.myTable,
                                visible: false,
                              })
                            }
                          >
                            닫기
                          </Button>
                          <h1 className="cardTitle">{m.myTable}번 테이블</h1>
                          <></>
                        </>
                      }
                      trigger="click"
                      visible={
                        m.myTable == popoverVisible.table &&
                        popoverVisible.visible
                      }
                    >
                      <Button
                        className="orderMoreDetailButton"
                        onClick={() =>
                          setPopoverVisible({ table: m.myTable, visible: true })
                        }
                      >
                        <h1>주문 상세보기</h1>
                      </Button>
                    </Popover>
                  </>
                </Card>
              </Col>
            );
          }
        })}
      </div>
    </>
  );
};

export default CompleteOrderList;
