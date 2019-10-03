import { put, takeEvery, call } from "redux-saga/effects";
import { callApi } from "../../services/api";
import { tokenService } from "./../../services/tokenService";

export function* doBooks(): IterableIterator<any> {
  yield takeEvery(`@@admin/BOOK_INIT`, function*(action: any) {
    const answerApi = yield call(callApi, "GET", "books");  
    const books = answerApi
    console.log(books)
      yield put({
        type: `@@admin/BOOK_ALL`,
        payload: {
          data: books,
        }
      });
  });
}