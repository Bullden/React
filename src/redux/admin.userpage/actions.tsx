import { createAction } from "typesafe-actions";
import { ChangeUserActions, ChangeUserRequest, UserInitRequest, UserForDelete } from "./types";

const prefix = "@@changeUser";

export function doChangeUser(data:ChangeUserRequest) {
    return{type:`${prefix}/DO_CHANGEUSER`,payload: data }
}
createAction(`${prefix}/${ChangeUserActions.DO_CHANGEUSER}`, resolve => {
    return (data: ChangeUserRequest) => {
      return resolve({ data });
    };
});

export function doUsers(data:UserInitRequest) {
  return{type:`${prefix}/USER_INIT`,payload: data }
}
createAction(`${prefix}/${ChangeUserActions.USER_INIT}`, resolve => {
  return (data: UserInitRequest) => {
    return resolve({ data });
  };
});
export function userForDelete(data:UserForDelete) {
  return{type:`${prefix}/USER_FOR_DELETE`,payload: data }
}
createAction(`${prefix}/${ChangeUserActions.USER_FOR_DELETE}`, resolve => {
  return (data: UserForDelete) => {
    return resolve({ data });
  };
});
