import { put, takeEvery, call, select } from "redux-saga/effects";
import { callApi, callApiGuard } from "../../services/api";
import { RootState } from "@redux/rootReducer";

export function* doUsers(): IterableIterator<any> {
  console.log(111111);
  yield takeEvery(`@@changeUser/USER_INIT`, function*() {
    const answerApi = yield call(callApi, "GET", "users");
    const users = answerApi;
    console.log("users", users);
    yield put({
      type: `@@changeUser/USER_ALL`,
      payload: {
        data: users
      }
    });
  });
};

export function* doChangeUser(): IterableIterator<any> {
  yield takeEvery(`@@changeUser/DO_CHANGEUSER`, function*(action: any) {
    const itemForDelete = yield select(
      (state: RootState) => state.changeUser.user
    );
    const answerApiGuard = yield call(
      callApiGuard,
      "PUT",
      `users/${itemForDelete.user._id}`,
      action.payload
    );
    const answerApi = yield call(callApi, "GET", "users");
    const users = answerApi;
    console.log("users", users);
    yield put({
      type: `@@changeUser/USER_ALL`,
      payload: {
        data: users
      }
    });
  });
}
