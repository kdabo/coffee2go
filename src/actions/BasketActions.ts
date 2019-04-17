import {BasketActionTypes, IBasketAdd} from "../BasketTypes";
import {IProduct} from "../ProductsData";

export const addToBasket = (product: IProduct): IBasketAdd => {
    return {
        product,
        type: BasketActionTypes.ADD
    }
};
