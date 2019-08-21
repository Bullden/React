import { HomeRequest } from "@redux/home/types";
import { ResultApiUser } from "@redux/login/types";
import { put, takeEvery, call } from "redux-saga/effects";
// import { delay } from "redux-saga";
import { environment } from "../../enviroment";
import { callApi } from "../../services/api";
// import { ResultApiUser } from "./types";
// import { toast } from 'react-toastify';
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import { HomeState } from "../../redux/home/types";
const needDelay: boolean = true;

// worker sagas
import { tokenService } from "./../../services/tokenService";
// import { push } from "react-router-redux";
// import { number } from 'prop-types';
// import { StaticRouter } from 'react-router';

export function* doInit(): IterableIterator<any> {
  yield takeEvery(`@@home/DATA_INIT`, function*(action: any) {
    // if (needDelay) {
    //   yield call(delay, 500);
    // }

    const answerApi = yield call(callApi, "GET", "books");
    
    // const {email, data, id} = answerApi
    console.log('books',answerApi);
    console.log(action);

    //const user = answerApi.forEach((user:ResultApiUser) => user.email ===  action.data.email && user.password === action.data.password? localStorage.setItem('currentUser',JSON.stringify(user)) : null);
    const user = answerApi
    
    // user !== undefined ? localStorage.setItem("user", JSON.stringify(user)) : null;
    // console.log("some user", user);

    // const admin = environment.admin
    // admin.email === user.email && admin.password === user.password && admin.name === user.name ? 
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
