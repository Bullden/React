import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import { environment } from "../../enviroment";
import { callApi } from "../../services/api";
import { ResultApiUser } from "./types";
import { toast } from 'react-toastify';
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import { LoginState } from '../../redux/login/types';
const needDelay: boolean = true;
let user: LoginState;
// worker sagas
import { tokenService } from './../../services/tokenService';
import { push } from "react-router-redux";



export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) {
    try {
      if (needDelay) {
        yield call(delay, 500);
      }
      const answerApi = yield call(callApi, "POST", "authenticate", action.data);
      const {email, data, id} = answerApi
   
      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: "token"
        }
      });
      // location.pathname = '/'
      localStorage.setItem('thisUser', JSON.stringify({email, data, id}));
      yield tokenService(answerApi)
    } catch (error) {
      yield put({
        type: `@@login/LOGIN_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}