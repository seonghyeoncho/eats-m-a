import { Action } from '../../Types';
import { StoreAction } from '../../actions';
import { firebaseInstance, dbService } from '../../../firebase';
import { RootState } from '../..';
import firebase from 'firebase';

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

  if (StoreAction.Types.LOAD_STORE_FIREBASE === action.type) {
    dbService
      .collection('stores')
      .where('ownerId', '==', getState().Auth.uid)
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((store) => {
          const { information, menu } = store.data();
          const { name, address, phone } = information;
          dispatch(StoreAction.setStoreInformation(name, address, phone));
          dispatch(StoreAction.setStoreMenu(menu));
        })
      )
      .catch((e) => console.log(e));
  }

  if (StoreAction.Types.ADD_CATEGORY_FIREBASE === action.type) {
    console.log('[StoreMiddleware] middle ware add category');
    dbService
      .collection('stores')
      .where('ownerId', '==', getState().Auth.uid)
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((store) => {
          console.log('[StoreMiddleware] found a store');
          store.ref
            .update({
              'menu.categories': firebase.firestore.FieldValue.arrayUnion({
                id: getState().Store.menu.categories.length,
                description: action.payload.description,
                name: action.payload.name,
              }),
            })
            .then(() => {
              console.log('ASDFIJASDLFSA');
              dispatch(StoreAction.loadStoreFirebase());
            })
            .catch((e) => {
              console.log(e.message);
            });
        })
      )
      .catch((e) => console.log(e.message));
  }
};
