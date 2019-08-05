export enum LoginActions {
  DO_LOGIN = "DO_LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED"
}

export interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string
}

export interface DoLoginProps {
  email: string;
  password: string;
  payloadFunc: Function;
}
export interface LoginRequest {
  email: string;
  password: string;
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

