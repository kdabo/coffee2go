import * as React from 'react';

import Tabs from "./Tabs";
import withLoader from "../hoc/withLoader";
import {ILocation} from "../types/LocationTypes";

interface IProps {
    location?: ILocation;
    inBasket: boolean;
    onAddToBasket: () => void;
}

interface ILikeState {
    likes: number;
    lastLike: Date | null
}

const initialLikeState: ILikeState = {
    likes: 0,
    lastLike: null
};

enum LikeActionTypes {
    LIKE = "LIKE"
}

interface ILikeAction {
    type: LikeActionTypes.LIKE;
    now: Date;
}

type LikeActions = ILikeAction;

const reducer = (state: ILikeState = initialLikeState, action: LikeActions) => {
    switch (action.type) {
        case LikeActionTypes.LIKE:
            return { ...state, likes: state.likes + 1, lastLike: action.now };
    }
    return state;
};

const Product: React.SFC<IProps> = props => {

    const [{ likes, lastLike }, dispatch]: [
        ILikeState,
        (action: ILikeAction) => void
        ] = React.useReducer(reducer, initialLikeState);

    const location = props.location;

    if (!location) {
        return null;
    }

    const handleAddClick = () => {
        props.onAddToBasket();
    };

    const handleLikeClick = () => {
        dispatch({ type: LikeActionTypes.LIKE, now: new Date() });
    };

    return (
        <React.Fragment>
            <h1>{location.name}</h1>
            <Tabs>
                <Tabs.Tab name="Description"
                          initialActive={true}
                          heading={() => <b>Description</b>}>
                    <p>{location.description}</p>
                </Tabs.Tab>
                <Tabs.Tab name="Reviews"
                          heading={() => <b>Reviews</b>}>
                    <div>
                        <ul className="product-reviews">
                            {
                                location.reviews.map(review => (
                                    <li key={review.reviewer} className="product-reviews-item">
                                        <i>"{review.comment}"</i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Tabs.Tab>
            </Tabs>

            {/*<p className="product-price">*/}
                {/*{*/}
                    {/*new Intl.NumberFormat("en-US", {*/}
                        {/*currency: "USD",*/}
                        {/*style: "currency"*/}
                    {/*}).format(location.price)*/}
                {/*}*/}
            {/*</p>*/}
            {!props.inBasket && (<button onClick={handleAddClick}>Add to basket</button>)}

            <div className="like-container">
                {likes > 0 && (
                    <div>{`I like this x ${likes}, last at ${lastLike}`}</div>
                )}
                <button onClick={handleLikeClick}>
                    {likes > 0 ? "Like again" : "Like"}
                </button>
            </div>
        </React.Fragment>

    )
};

export default withLoader(Product);
