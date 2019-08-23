import { createAction } from "typesafe-actions";
import { SetCardRequest, CardsPageActions, RemoveCard } from "./typesCards";

const prefix = "@@card";

export function doCard(data: SetCardRequest) {
  return { type: `@@card/CARD_INIT`, payload: data };
}
export function removeCard (data: RemoveCard) {
  return {type: `@@card/CARD_DELETE`, payload: data}
}
createAction(`${prefix}/${CardsPageActions.CARD_INIT}`, resolve => {
  return (data: SetCardRequest) => {
    return resolve({ data });
  };
});

createAction(`${prefix}/${CardsPageActions.CARD_DELETE}`, resolve => {
  return (data: RemoveCard) => {
    return resolve({ data });
  };
});
