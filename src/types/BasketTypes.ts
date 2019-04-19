import {ILocation} from "./LocationTypes";

export enum BasketActionTypes {
    ADD = "BASKET/ADD"
}

export interface IBasketState {
    readonly locations: ILocation[]
}

export interface IBasketAdd {
    type: BasketActionTypes.ADD,
    location: ILocation
}

export type BasketActions = IBasketAdd;

