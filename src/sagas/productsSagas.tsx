import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LocationssActionTypes } from "../types/LocationsTypes";
import { fetchError, fetchSuccess } from '../actions/LocationsActions';
import { fetchPlaces} from '../utils/api'

function* handleFetch() {
    try {
        const res = yield call(fetchPlaces);
        yield put(fetchSuccess(res));
    } catch (error) {
        yield put({type: LocationssActionTypes.FETCH_ERROR, error})
    }
}


function* watchHandleData() {
    yield takeEvery(LocationssActionTypes.GETALL, handleFetch)
}

export function* productsSaga() {
    yield all([fork(watchHandleData)])
}
