import { StoreAction } from '../actions';
import { Action, ActionCreator } from '../Types';

export interface Store {
  information: {
    name: string;
    address: string;
    phone: string;
  };
}

const initialState: Store = {
  information: {
    name: '',
    address: '',
    phone: '',
  },
};

const StoreReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case StoreAction.Types.SET_STORE_INFO:
      return {
        ...state,
        information: {
          name: action.payload.name,
          address: action.payload.address,
          phone: action.payload.phone,
        },
      };
    default:
      return state;
  }
};

export default StoreReducer;
