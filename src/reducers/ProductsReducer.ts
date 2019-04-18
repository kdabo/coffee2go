import { Reducer } from "redux"; // importing reducer type
import { IProductsState, ProductsActions, ProductsActionTypes } from "../types/ProductsTypes";

const initialProductState: IProductsState = {
    products: [],
    currentProduct: null,
    productsLoading: false,
};

export const productsReducer: Reducer<IProductsState, ProductsActions> = (state = initialProductState, action) => {
    switch (action.type) {
        case ProductsActionTypes.GETSINGLE: {
            return {
                ...state,
                currentProduct: action.product,
                productsLoading: false
            }
        }
        case ProductsActionTypes.GETALL: {
            return {
                ...state,
                products: action.products,
                productsLoading: false
            }
        }
        case ProductsActionTypes.LOADING: {
            return {
                ...state,
                productsLoading: true
            }
        }
    }
    return state;
};