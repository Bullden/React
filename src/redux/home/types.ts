import { Product } from "../../types";
import { BaseState } from "../../types/baseState";

export enum HomeActions {
  DATA_INIT = "DATA_INIT",
  DATA_LOADED = "DATA_LOADED",
  DATA_LOAD_FAILED = "DATA_LOAD_FAILED"
}

export interface HomeState extends BaseState {
  products: Product[];
  enviroment: string;
  token: any;
}

export interface LoginResult {
  token: any;
}

export interface ResultApiUser{
  id : number;
  email: string;
  password : string;
  name : string;
  userPhoto : string;
  data : string;
}

export interface HomeRequest {
  email: string;
  password: string;
  name: string;
  user: any;
}