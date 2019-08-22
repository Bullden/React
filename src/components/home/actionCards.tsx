import { createAction } from "typesafe-actions";
import { SetCardRequest, CardsPageActions } from "./typesCards";

const prefix ="@@card";

export function doCard(data: SetCardRequest){
    return { type: `@@admin/CARD_INIT`, payload:data };
  }
  createAction(`${prefix}/${CardsPageActions.CARD_INIT}`, resolve => {
    return (data: SetCardRequest) => {
      return resolve({ data });
    };
  });