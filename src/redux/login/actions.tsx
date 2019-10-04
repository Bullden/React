import { createAction } from "typesafe-actions";
import { LoginActions, LoginRequest, LogoutRequest } from "./types";

const prefix = "@@login";

export function doLogin(data: LoginRequest) {
  return { type: `${prefix}/${LoginActions.DO_LOGIN}`, data };
}
createAction(`${prefix}/${LoginActions.DO_LOGIN}`, resolve => {
  return (data: LoginRequest) => {
    return resolve({ data });
  };
});
export function doLogout(data: LogoutRequest) {
  return { type: `${prefix}/${LoginActions.DO_LOGOUT}`, data };
}
createAction(`${prefix}/${LoginActions.DO_LOGOUT}`, resolve => {
  return (data: LogoutRequest) => {
    return resolve({ data });
  };
});