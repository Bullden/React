import { ResultApiUser } from '@redux/login/types';
import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import { environment } from "../../enviroment";
import { callApi } from "../../services/api";
import { toast } from "react-toastify";
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import { LoginState } from "../../redux/login/types";
const needDelay: boolean = true;
let user: LoginState;
// worker sagas
import { tokenService } from "./../../services/tokenService";
import { push } from "react-router-redux";


export function* doRegistration(): IterableIterator<any> {
  yield takeEvery(`@@registration/DO_REGISTRATION`, function*(action: any) {
    try {
      if (needDelay) {
        yield call(delay, 500);
      } 
      const answerApi = yield call(callApi, "POST", "users", action.data);
      const { email, data, id } = answerApi;
      yield put({
        type: `@@registration/REGISTRATION_SUCCESS`,
        payload: {
          data: "token"
        }
      });
      const stringApi = JSON.stringify(answerApi)
      console.log(stringApi)
      // location.pathname = '/'
    //   localStorage.setItem("thisUser", JSON.stringify({ email, data, id }));
      yield tokenService(answerApi);
    } catch (error) {
      yield put({
        type: `@@registration/REGISTRATION_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

