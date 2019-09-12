import { createAction } from "typesafe-actions";
import { LoginActions, LoginRequest } from "./types";

const prefix = "@@login";

export function doLogin(data: LoginRequest) {
  return { type: `${prefix}/${LoginActions.DO_LOGIN}`, data };
}
createAction(`${prefix}/${LoginActions.DO_LOGIN}`, resolve => {
  return (data: LoginRequest) => {
    return resolve({ data });
  };
});