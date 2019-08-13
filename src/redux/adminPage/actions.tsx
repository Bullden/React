import { AdminPageActions } from "./types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@admin";

export function doAdminInit() {
  return { type: `${prefix}/${AdminPageActions.ADMIN_INIT}` };
}