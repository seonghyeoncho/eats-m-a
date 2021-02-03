import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { StoreAction } from '../../redux/actions';
import './PreferenceStorePage.scss';
import {setStoreInfoFirebase, setStoreInformation} from "../../redux/actions/StoreAction";
import useInput from "../../hooks/useInput";

interface props {}

const PreferenceStorePage: React.FC<props> = (props) => {
  const storeInfo = useSelector((state: RootState) => state.Store.information);
  const [edit,setEdit]=useState<boolean>(false);
  const [name, onChangeName] = useInput(storeInfo.name);
  const [address,onChangeAddress]=useInput(storeInfo.address);
  const [phone,onChangePhone]=useInput(storeInfo.phone);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StoreAction.loadStoreFirebase());
  }, []);

  const onSubmitChange=useCallback(()=>{
    console.log('change');
    dispatch(setStoreInformation(name,address,phone));
    dispatch(setStoreInfoFirebase(name,address,phone));
  },[name,address,phone]);

  return (
      <>
          {(edit===false)?
              <div className="PreferenceStorePage">
                <div className="block">
                  <h2>가게 이름</h2>
                  <p>{storeInfo.name}</p>
                </div>
                <div className="block">
                  <h2>주소</h2>
                  <p>{storeInfo.address}</p>
                </div>
                <div className="block">
                  <h2>전화번호</h2>
                  <p>{storeInfo.phone}</p>
                </div>
                <div className="block">
                  <button
                      className="PageButton"
                      onClick={()=>setEdit(true)}
                  >
                    수정하기
                  </button>
                </div>
              </div>:
              <div className="PreferenceStorePage">
                  <div className="block">
                    <h2>가게 이름</h2>
                    <input
                        value={name}
                        type="text"
                        onChange={onChangeName}
                    />
                  </div>
                  <div className="block">
                      <h2>주소</h2>
                    <input
                        value={address}
                        type="text"
                        onChange={onChangeAddress}
                    />
                  </div>
                  <div className="block">
                      <h2>전화번호</h2>
                    <input
                        value={phone}
                        type="text"
                        onChange={onChangePhone}
                    />
                  </div>
                <div className="block">
                  <button
                      className="PageButton"
                      onClick={()=>{
                        setEdit(false);
                        onSubmitChange()
                      }}>저장하기
                  </button>
                </div>
              </div>
          }
      </>
  );
};

export default PreferenceStorePage;
