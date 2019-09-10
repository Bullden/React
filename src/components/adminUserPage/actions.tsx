import { createAction } from "typesafe-actions";
import { ChangeUserActions, ChangeUserRequest } from "./types";

const prefix = "@@changeUser";

export function doChangeUser(data:ChangeUserRequest) {
    return{type:`${prefix}/DO_CHANGEUSER`,payload: data }
}
createAction(`${prefix}/${ChangeUserActions.DO_CHANGEUSER}`, resolve => {
    return (data: ChangeUserRequest) => {
      return resolve({ data });
    };
  });