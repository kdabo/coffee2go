import { Reducer } from "redux";
import { BasketActions, BasketActionTypes, IBasketState } from "../types/BasketTypes";

const initialBasketState: IBasketState = {
  locations: []
};

export const basketReducer: Reducer<IBasketState, BasketActions> = (state = initialBasketState, action) => {
    switch (action.type) {
        case BasketActionTypes.ADD: {
            return {
                ...state,
                locations: state.locations.concat(action.location)
            };
        }
    }
    return state || initialBasketState;
};