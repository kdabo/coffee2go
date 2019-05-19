import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {MapActionTypes} from "../types/MapTypes";
import {fetchMarkers, fetchSuccess} from "../actions/MapActions";
import {fetchMapMarkers} from "../utils/api";

function* handleFetch(action: ReturnType<typeof fetchMarkers>) {
    try {
        const res = yield call(fetchMapMarkers, action.payload);
        yield put(fetchSuccess(res));

    } catch (error) {
        yield put({type: MapActionTypes.FETCH_ERROR, error})
    }
}

function* watchHandleData() {
    yield takeEvery(MapActionTypes.FETCH_MARKERS, handleFetch)
}

export function* mapSaga() {
    yield all([
        fork(watchHandleData),
    ])
}
