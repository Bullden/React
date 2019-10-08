import { initialState } from "./reducer";
import { LoginState } from "./types";

import { put, takeEvery, call, select } from "redux-saga/effects";
import jwt_decode from "jwt-decode";
import { callApi } from "../../services/api";
import { tokenService } from "../../services/tokenService";
import { RootState } from "@redux/rootReducer";

const needDelay: boolean = true;
export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {
    const answerApi = yield call(callApi, "POST", "login", action.data);

    const token = answerApi.data.token;
    localStorage.setItem("token", token);

    const decoded: any = yield jwt_decode(token);

    const user = decoded;
    localStorage.setItem("user", JSON.stringify(user));
    if (user) {
      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: user
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
export function* doLogout(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGOUT`, function*(action: any) {
    let itemForDelete = yield select((state: RootState) => state.login.data);
    localStorage.removeItem("user");
    const fakeUser = {
      id: 99,
      name: "fakeUser",
      password: "fakeUser",
      email: "fakeUser",
      permissions: ["fakeUser"]
    };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    yield put({
      type: `@@login/LOGOUT`,
      payload: {
        initialState
      }
    });
  });
}
