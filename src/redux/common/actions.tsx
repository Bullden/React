import { ErrorActions } from "./types";

const prefix = "@@";

export function onErrorOccured(error: string) {
  return { type: `${prefix}/${ErrorActions.ERROR_OCCURED}`, error };
}