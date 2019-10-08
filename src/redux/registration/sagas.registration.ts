import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import { callApi } from "../../services/api";
import { tokenService } from "../../services/tokenService";

const needDelay: boolean = true;

export function* doRegistration(): IterableIterator<any> {
  yield takeEvery(`@@registration/DO_REGISTRATION`, function*(action: any) {
    try {
      if (needDelay) {
        yield call(delay, 500);
      }
      const answerApi = yield call(
        callApi,
        "POST",
        "users/registration",
        action.data
      );

      yield put({
        type: `@@registration/REGISTRATION_SUCCESS`,
        payload: {
          data: action.data
        }
      });

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
