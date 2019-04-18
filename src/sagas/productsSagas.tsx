import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {ProductsActionTypes} from "../types/ProductsTypes";
import { fetchProducts, fetchError} from '../actions/ProductsActions';
import {search} from '../utils/yelp';

const API_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';

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