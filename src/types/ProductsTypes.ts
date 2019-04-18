import { IProduct } from "../ProductsData";

export enum ProductsActionTypes {
    GETALL = "PRODUCTS/GETALL",
    GETSINGLE= "PRODUCTS/GETSINGLE",
    LOADING = "PRODUCTS/LOADING",
    FETCH_ERROR= "PRODUCTS/FETCH_ERROR"
}

export interface IProductsGetAllAction {
    type: ProductsActionTypes.GETALL,
    products: IProduct[]
}

export interface IProductsGetSingleAction {
    type: ProductsActionTypes.GETSINGLE,
    product: IProduct
}

export interface IProductsLoadingAction {
    type: ProductsActionTypes.LOADING,
}

export interface IProductsErrorAction {
    type: ProductsActionTypes.FETCH_ERROR,
}

export type ProductsActions = IProductsGetAllAction | IProductsLoadingAction | IProductsGetSingleAction | IProductsErrorAction;

export interface IProductsState {
    readonly products: IProduct[];
    readonly productsLoading: boolean;
    readonly currentProduct: IProduct | null;
}
