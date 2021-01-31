import { Action } from '../../Types';
import { StoreAction } from '../../actions';
import { firebaseInstance, dbService } from '../../../firebase';
import { RootState } from '../..';

interface param {
  dispatch: any;
  getState: () => RootState;
}

export const StoreMiddleware = ({ dispatch, getState }: param) => (
  next: any
) => (action: Action) => {
  next(action);

  if (StoreAction.Types.FETCH_STORE_INFO === action.type) {
  }

  if (StoreAction.Types.LOAD_STORE_INFO_FIREBASE === action.type) {
    dbService
      .collection('stores')
      .where('ownerId', '==', getState().Auth.uid)
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((store) => {
          const { address, name, phone } = store.data().information;
          dispatch(StoreAction.setStoreInformation(name, address, phone));
        })
      )
      .catch((e) => console.log(e));
  }
};
