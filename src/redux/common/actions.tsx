import { ErrorActions } from "./types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@";

export function onErrorOccured(error: string) {
  return { type: `${prefix}/${ErrorActions.ERROR_OCCURED}`, error };
}