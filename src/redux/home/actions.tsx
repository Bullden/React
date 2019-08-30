import { HomeActions } from "./types";



const prefix = "@@home";

export function doInit() {
  return { type: `${prefix}/${HomeActions.DATA_INIT}` };
}