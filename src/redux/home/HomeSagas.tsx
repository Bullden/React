import { put, takeEvery, call } from "redux-saga/effects";
import { callApi } from "../../services/api";
import { tokenService } from "./../../services/tokenService";

export function* doCards(): IterableIterator<any> {
  yield takeEvery(`@@card/DO_CARD`, function*(action: any) {
    const answerApi = yield call(callApi, "GET", "books");  
    const books = answerApi
    console.log(books)
      yield put({
        type: `@@card/CARD_ALL`,
        payload: {
          data: books,
        }
      });
  });
}
// export function* cardAll(): IterableIterator<any> {
//   yield takeEvery(`@@card/CARD_ALL`,function*(action:any) {
//     const answerApi = yield call(callApi, "GET", "books", action.data);
//     const books = answerApi
//     console.log(books);
    
//   })
// }
