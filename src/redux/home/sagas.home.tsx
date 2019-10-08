import { put, takeEvery, call } from "redux-saga/effects";
import { callApi } from "../../services/api";
import { tokenService } from "../../services/tokenService";

export function* doCards(): IterableIterator<any> {
  yield takeEvery(`@@card/DO_CARD`, function*(action: any) {
    const answerApi = yield call(callApi, "GET", "books");
    const books = answerApi;
    yield put({
      type: `@@card/CARD_ALL`,
      payload: {
        data: books.data
      }
    });
  });
}
