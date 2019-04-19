import { ActionCreator } from "redux";
import { action } from 'typesafe-actions';
import { LocationssActionTypes } from "../types/LocationsTypes";
import { ILocation } from "../types/LocationTypes";

// export const getProduct: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = (id: number) => {
//   return async (dispatch: Dispatch) => {
//       dispatch(loading());
//       const product = await getProductFromAPI(id);
//       return dispatch({
//           product,
//           type: ProductsActionTypes.GETSINGLE
//       })
//   }
// };

export const fetchLocation = () => action(LocationssActionTypes.FETCH_LOCATION);

export const fetchSuccess = (data: ILocation[]) => action(LocationssActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(LocationssActionTypes.FETCH_ERROR, message);