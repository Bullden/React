export enum LoginActions {
  DO_LOGIN = "DO_LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED"
}

export interface LoginState {
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
  email: string;
  password: string;
  name: string;
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

