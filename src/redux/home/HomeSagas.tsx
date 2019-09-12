import { put, takeEvery, call } from "redux-saga/effects";
import { callApi } from "../../services/api";
import { tokenService } from "./../../services/tokenService";

export function* doInit(): IterableIterator<any> {
  yield takeEvery(`@@home/DATA_INIT`, function*(action: any) {
    const answerApi = yield call(callApi, "GET", "books");  
    const user = answerApi
    if (user) {
      yield put({
        type: `@@home/DATA_LOADED`,
        payload: {
          data: user,
        }
      });
      yield tokenService(answerApi);
    } else {
      yield put({
        type: `@@home/ERROR_OCCURED`,
        payload: {
          error: "error.message"
        }
      });
    }
  });
}
