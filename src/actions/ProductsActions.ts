import { ActionCreator, AnyAction, Dispatch } from "redux";
import { action } from 'typesafe-actions';
import { ThunkAction} from "redux-thunk";
import {getProducts as getProductsFromAPI, getProduct as getProductFromAPI, IProduct} from "../ProductsData";
import { IProductsGetAllAction, IProductsLoadingAction, IProductsState, ProductsActionTypes} from "../types/ProductsTypes";

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(loading());
        const products = await getProductsFromAPI();
        return dispatch({
            products,
            type: ProductsActionTypes.GETALL
        })
    }
};

export const getProduct: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = (id: number) => {
  return async (dispatch: Dispatch) => {
      dispatch(loading());
      const product = await getProductFromAPI(id);
      return dispatch({
          product,
          type: ProductsActionTypes.GETSINGLE
      })
  }
};

const loading: ActionCreator<IProductsLoadingAction> = () => ({
    type: ProductsActionTypes.LOADING
});



export const fetchProducts = (products: IProduct[]) => action(ProductsActionTypes.GETALL, products);
export const fetchError = (message: string) => action(ProductsActionTypes.FETCH_ERROR, message);
