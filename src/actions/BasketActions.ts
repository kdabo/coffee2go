import {BasketActionTypes, IBasketAdd} from "../types/BasketTypes";
import {ILocation} from "../types/LocationTypes";

export const addToBasket = (location: ILocation): IBasketAdd => {
    return {
        location,
        type: BasketActionTypes.ADD
    }
};
