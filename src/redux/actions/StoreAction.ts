import { Action, ActionCreator } from '../Types';

export enum Types {
  SET_STORE_INFO = '[Store] set store info',
  FETCH_STORE_INFO = '[Store] fetch store info',
  LOAD_STORE_INFO_FIREBASE = '[Store] load store info from firebase',
}

export const setStoreInformation: ActionCreator = (
  name: string,
  address: string,
  phone: string
) => {
  return {
    type: Types.SET_STORE_INFO,
    payload: {
      name: name,
      address: address,
      phone: phone,
    },
  };
};

export const loadStoreInfoFirebase: ActionCreator = () => {
  return {
    type: Types.LOAD_STORE_INFO_FIREBASE,
    payload: null,
  };
};
