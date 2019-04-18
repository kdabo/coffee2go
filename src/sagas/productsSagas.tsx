import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {ProductsActionTypes} from "../types/ProductsTypes";
import { fetchProducts, fetchError} from '../actions/ProductsActions';

import yelp from "yelp-fusion";

const API_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';
const API_KEY =''

const client = yelp.client(API_KEY);


const searchRequest = {
    term: 'Coffee',
    location: 'san francisco, ca'
};

export const search = client.search(searchRequest).then(response => {
    console.log("", response);
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
}).catch(e => {
    console.log("search", e);
});



function* handleFetch() {
    try {
        const res = yield call(search, 'get', API_ENDPOINT, '/?term=coffee');

        if (res.error) {
            yield put(fetchError(res.error))
        } else {
            yield put(fetchProducts(res))
        }
    }
    catch (err) {
        if (err instanceof Error) {
            yield put(fetchError(err.stack!))
        } else {
            yield put(fetchError('An unknown error occured.'))
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(ProductsActionTypes.GETALL, handleFetch)
}

export function* productsSaga() {
    yield all([fork(watchFetchRequest)])
}
