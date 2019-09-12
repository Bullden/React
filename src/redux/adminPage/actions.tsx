import { AdminPageActions, SetBookRequest, AdminBookPageActions} from "./types";
import { createAction } from "typesafe-actions";

const prefix = "@@admin";

export function doAdminInit() {
  return { type: `${prefix}/${AdminPageActions.ADMIN_INIT}` };
}
export function doBook(data: SetBookRequest){
  return { type: `@@admin/BOOK_INIT`, payload:data };
}
createAction(`${prefix}/${AdminBookPageActions.BOOK_INIT}`, resolve => {
  return (data: SetBookRequest) => {
    return resolve({ data });
  };
});
