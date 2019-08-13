import { LoginRequest } from "@redux/login/types";
import { ResultApiUser } from "@redux/login/types";
import { put, takeEvery, call } from "redux-saga/effects";
// import { delay } from "redux-saga";
import { environment } from "../../enviroment";
import { callApi } from "../../services/api";
// import { ResultApiUser } from "./types";
// import { toast } from 'react-toastify';
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import { LoginState } from "../../redux/login/types";
const needDelay: boolean = true;

// worker sagas
import { tokenService } from "./../../services/tokenService";
// import { push } from "react-router-redux";
// import { number } from 'prop-types';
// import { StaticRouter } from 'react-router';

export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {
    // if (needDelay) {
    //   yield call(delay, 500);
    // }

    const answerApi = yield call(callApi, "GET", "users");
    
    // const {email, data, id} = answerApi
    console.log(answerApi);
    console.log(action);

    //const user = answerApi.forEach((user:ResultApiUser) => user.email ===  action.data.email && user.password === action.data.password? localStorage.setItem('currentUser',JSON.stringify(user)) : null);
    const user = answerApi.find(
      (user: LoginRequest) =>
        user.email === action.data.email &&
        user.password === action.data.password
    );
    // const isAdmin = answerApi.roleId;
     const fakeUser = {id:99,name:'fakeUser',password:'fakeUser',email:'fakeUser' } 
    user !== undefined || null ? localStorage.setItem("user", JSON.stringify(user)) : localStorage.setItem('user',JSON.stringify(fakeUser));
    console.log("some user", user);
      
    // const admin = environment.admin
    // admin.email === user.email && admin.password === user.password && admin.name === user.name ? 
    if (user) {
      // isAdmin = true
      alert("yahoo!");
      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: user,
          // isAdmin: isAdmin
        }
      });
      yield tokenService(answerApi);
    } else {
      console.log("errrrrr!");
      yield put({
        type: `@@login/LOGIN_FAILED`,
        payload: {
          error: "error.message"
        }
      });
    }
  });
}
