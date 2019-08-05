import { HomeActions } from "./types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@home";

export function doInit() {
  return { type: `${prefix}/${HomeActions.DATA_INIT}` };
}