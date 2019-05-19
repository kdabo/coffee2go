import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {LocationssActionTypes} from "../types/LocationsTypes";
import {fetchLocation, fetchLocationSuccess, fetchSuccess} from '../actions/LocationsActions';
import {fetchPlace, fetchPlaces} from '../utils/api'

function* handleFetch() {
    try {
        const res = yield call(fetchPlaces);
        yield put(fetchSuccess(res));
    } catch (error) {
        yield put({type: LocationssActionTypes.FETCH_ERROR, error})
    }
}

function* handleSelect(action: ReturnType<typeof fetchLocation>) {
    try {
        const res = yield call(fetchPlace, action.payload);
        yield put(fetchLocationSuccess(res));

    } catch (error) {
        yield put({type: LocationssActionTypes.FETCH_ERROR, error})
    }
}

function* watchHandleData() {
    yield takeEvery(LocationssActionTypes.GETALL, handleFetch)
}

function* watchHandleSelect() {
    yield takeEvery(LocationssActionTypes.GETSINGLE, handleSelect)
}

export function* productsSaga() {
    yield all([
        fork(watchHandleData),
        fork(watchHandleSelect)
    ])
}

