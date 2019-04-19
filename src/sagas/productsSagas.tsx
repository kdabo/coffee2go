import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LocationssActionTypes } from "../types/LocationsTypes";
import { fetchError, fetchSuccess } from '../actions/LocationsActions';
import {  fetchPlaces } from '../utils/api'

function* handleFetch() {
    try {
        const res = yield call(fetchPlaces);

        if (res.error) {
            yield put(fetchError(res.error))
        } else {
            yield put(fetchSuccess(res))
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
    yield takeEvery(LocationssActionTypes.FETCH_LOCATION, handleFetch)
}

export function* productsSaga() {
    yield all([fork(watchFetchRequest)])
}