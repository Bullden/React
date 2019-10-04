export enum LoginActions {
  DO_LOGIN = "DO_LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED",
  DO_LOGOUT = "DO_LOGOUT"
}

export interface LoginState {
  data: object;
  login: any;
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
  name: string;
  token: any;
  isLoggedIn: boolean;
}


export interface DoLoginProps {
  email: string;
  password: string;
  payloadFunc: Function;
  name: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  name: string
  isLoggedIn: boolean
}
export interface LogoutRequest {
  // username: string;
  // password: string;
  // name: string
  // isLoggedIn: boolean
}

export interface LoginResult {
  token: string;
}

export interface ResultApiUser{
  id : number;
  email: string;
  password : string;
  name : string;
  userPhoto : string;
  data : string;
}

