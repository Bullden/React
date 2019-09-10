import { LoginRequest } from "@redux/login/types";
import { ResultApiUser } from "@redux/login/types";
import { put, takeEvery, call } from "redux-saga/effects";
import jwt_decode from 'jwt-decode';

import { callApi } from "../../services/api";


const needDelay: boolean = true;


import { tokenService } from "./../../services/tokenService";


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {

    const answerApi = yield call(callApi, "POST", "v1/login", action.data);
    
    // const {email, data, id} = answerApi
    console.log(answerApi);
    console.log(action);
    console.log(answerApi.data)

    const token = answerApi.data;
    const id = answerApi.id
    const decoded:any = jwt_decode(token)
    const user = decoded.user
    console.log('decoded:',user)
    
    
    localStorage.setItem('user',JSON.stringify(user))
    // const getUser = yield call(callApi,'GET','v1/login')


    // console.log('getUser',getUser)
    // const jwt = require('jsonwebtoken');
    // var token = jwt.sign(action.data , 'key')
    // console.log(token)
    // const decoded = jwt.verify(token, 'key')
    // console.log(decoded.password)
    // console.log(jwt.answerApi.data)


    // const userName = answerApi.name
    // const user = answerApi.forEach((user:ResultApiUser) => user.email ===  action.data.email && user.password === action.data.password? localStorage.setItem('currentUser',JSON.stringify(user)) : null);
    // const udser = answerApi.find(
    //   (user: LoginRequest) =>
    //     user.email === action.data.email &&
    //     user.password === action.data.password
    // );
    // // const isAdmin = answerApi.roleId;
    //  const fakeUser = {id:99,name:'fakeUser',password:'fakeUser',email:'fakeUser' } 
    // user !== undefined || null ? localStorage.setItem("user", JSON.stringify(user)) : localStorage.setItem('user',JSON.stringify(fakeUser));
    // console.log("some user", user);
      

    if (user) {
      // isAdmin = true
      alert("yahoo!");
      console.log('ACTION',action.data)
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
