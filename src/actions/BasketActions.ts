import {BasketActionTypes, IBasketAdd} from "../types/BasketTypes";
import {IProduct} from "../ProductsData";

export const addToBasket = (product: IProduct): IBasketAdd => {
    return {
        product,
        type: BasketActionTypes.ADD
    }
};
