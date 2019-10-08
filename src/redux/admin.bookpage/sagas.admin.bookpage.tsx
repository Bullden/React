import { put, takeEvery, call, select } from "redux-saga/effects";
import { callApi, callApiGuard } from "../../services/api";
import { tokenService } from "../../services/tokenService";
import { RootState } from "@redux/rootReducer";

export function* doBooks(): IterableIterator<any> {
  yield takeEvery(`@@admin/BOOK_INIT`, function*(action: any) {
    const answerApi = yield call(callApi, "GET", "books");  
    const books = answerApi
      yield put({
        type: `@@admin/BOOK_ALL`,
        payload: {
          data: books.data,
        }
      });    
  });  
}

export function* doDeleteBook(): IterableIterator<any> {  
  yield takeEvery(`@@admin/BOOK_DO_DELETE`, function*(action:any) {
    const itemForDelete = yield select((state:RootState) => state.adminBookPage.bookForDelete)
    const answerApiGuard = yield call(callApiGuard,"DELETE",`books/${itemForDelete._id}`)
    const bookForDelte =answerApiGuard
    yield put ({
      type:`@@admin/BOOK_DELETE`,
      payload: {
        data: bookForDelte.data
      }
    })
    const answerApi = yield call(callApi, "GET", "books");  
    const books = answerApi
    yield put ({
      type: `@@admin/BOOK_ALL`,
      payload: {
        data: books.data,
      }
    })
  })
}
export function* setBook(): IterableIterator<any> {
  yield takeEvery(`@@admin/BOOK_SET`, function*(action: any) {
    const answerApiGuard = yield call(callApiGuard, "POST", "books", action.payload);  
    const addBook = answerApiGuard
      yield put({
        type: `@@admin/BOOK_ADD`,
        payload: {
          data: addBook.data,
        }
      });
      const answerApi = yield call(callApi, "GET", "books");  
    const books = answerApi
    yield put ({
      type: `@@admin/BOOK_ALL`,
      payload: {
        data: books.data,
      }
    })    
  });  
}