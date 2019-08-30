import { HomeRequest } from "@redux/home/types";
import { ResultApiUser } from "@redux/login/types";
import { put, takeEvery, call } from "redux-saga/effects";

import { callApi } from "../../services/api";

import { tokenService } from "./../../services/tokenService";


export function* doInit(): IterableIterator<any> {
  yield takeEvery(`@@home/DATA_INIT`, function*(action: any) {


    const answerApi = yield call(callApi, "GET", "books");
    

    console.log('books',answerApi);
    console.log(action);

    
    const user = answerApi
    

    if (user) {
      alert("yahoo!");
      yield put({
        type: `@@home/DATA_LOADED`,
        payload: {
          data: user,
        }
      });
      yield tokenService(answerApi);
    } else {
      console.log("errrrrr!");
      yield put({
        type: `@@home/ERROR_OCCURED`,
        payload: {
          error: "error.message"
        }
      });
    }
  });
}
