import { createAction } from "typesafe-actions";
import { RegistrationActions, RegistrationRequest} from "./types";
import { emphasize } from "@material-ui/core/styles";

const prefix = "@@registration";

export function doRegistration(data: RegistrationRequest) {
  return { type: `${prefix}/${RegistrationActions.DO_REGISTRATION}`, data };
}
createAction(`${prefix}/${RegistrationActions.DO_REGISTRATION}`, resolve => {
  return (data: RegistrationRequest) => {
    return resolve({ data });
  };
});
