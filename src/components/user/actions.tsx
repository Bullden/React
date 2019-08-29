import { createAction } from "typesafe-actions";
import { UserChangeActions, UserChangeRequest } from "./types";

const prefix = "@@change";

export function doUserChange(data:UserChangeRequest) {
    return{type:`${prefix}/${UserChangeActions.DO_CHANGE}`,payload: data }
}
createAction(`${prefix}/${UserChangeActions.DO_CHANGE}`, resolve => {
    return (data: UserChangeRequest) => {
      return resolve({ data });
    };
  });