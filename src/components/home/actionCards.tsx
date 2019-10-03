import { createAction } from "typesafe-actions";
import { SetCardRequest, CardsPageActions, RemoveCard, ShowCardRequest, AllCardRequest, DoCardsRequest } from "./typesCards";
const prefix = "@@card";

export function doCards(data: DoCardsRequest) {
  return { type: `@@card/DO_CARD`, data };
}
export function doCard(data: SetCardRequest) {
  return { type: `@@card/CARD_INIT`, payload: data };
}
export function removeCard (data: RemoveCard) {
  return {type: `@@card/CARD_DELETE`, payload: data}
}
export function showCard (data: ShowCardRequest) {
  return {type: `@@card/CARD_SHOW`, payload: data}
}
export function allCard (data: AllCardRequest) {
  return {type: `@@card/CARD_ALL`, payload: data}
}

createAction(`${prefix}/${CardsPageActions.DO_CARD}`, resolve => {
  return (data: DoCardsRequest) => {
    return resolve({ data });
  };
});

createAction(`${prefix}/${CardsPageActions.CARD_SHOW}`, resolve => {
  return (data: ShowCardRequest) => {
    return resolve({ data });
  };
});
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
createAction(`${prefix}/${CardsPageActions.CARD_ALL}`, resolve => {
  return (data: AllCardRequest) => {
    return resolve({ data });
  };
});
