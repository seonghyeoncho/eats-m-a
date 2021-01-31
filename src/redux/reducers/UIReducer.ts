import { UIAction } from '../actions';
import { Action, ActionCreator } from '../Types';

export interface UI {
  isGlobalLoading: boolean;
}

const initialState: UI = {
  isGlobalLoading: true,
};

const UIReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UIAction.Types.SET_GLOBAL_LOADING:
      return {
        ...state,
        isGlobalLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};

export default UIReducer;
