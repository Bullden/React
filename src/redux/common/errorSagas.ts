import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "redux-saga";

export function* onError(): IterableIterator<any> {
  yield takeEvery(`@@ERROR_OCCURED`, function*(action: any) {
    try {
      yield put({
        type: `@@ERROR_SHOW`,
        payload: {
          error: action.payload
        }
      });
      yield call(delay, 5000);
      yield put({
        type: `@@ERROR_HIDE`
      });
    } catch (error) {
      yield put({
        type: `@@ERROR_SHOW`,
        payload: {
          error: error.message
        }
      });
      yield call(delay, 500);
      yield put({
        type: `@@ERROR_HIDE`
      });
    }
  });
}