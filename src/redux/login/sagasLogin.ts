import { put, takeEvery, call } from "redux-saga/effects";
import jwt_decode from 'jwt-decode';
import { callApi } from "../../services/api";
import { tokenService } from "./../../services/tokenService";

const needDelay: boolean = true;
export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {
    const answerApi = yield call(callApi, "POST", "login", action.data);
    const token = answerApi.token;
    localStorage.setItem('token', token)
    
    const decoded:any = yield jwt_decode(token)
    
    const user = decoded
    localStorage.setItem('user',JSON.stringify(user))
    if (user) { 
      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: user,
        }
      });
      yield tokenService(answerApi);
    } else {
      yield put({
        type: `@@login/LOGIN_FAILED`,
        payload: {
          error: "error.message"
        }
      });
    }
  });
}
