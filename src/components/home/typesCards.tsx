import { Cards } from "src/types/card";

export enum CardsPageActions {
    CARD_INIT = "CARD_INIT",
    CARD_DELETE = "CARD_DELETE",
    CARD_SHOW = "CARD_SHOW",
    CARD_ALL = "CARD_ALL",
    DO_CARD = "DO_CARD",
}

export interface DoCardsRequest {
    cards:Array<Cards>
}

export interface CardsPageState {
    card: string;
    allCards: Array<Cards>;
    cardLength: any
    quantity: string
    cards: Array<Cards>
}

export interface SetCardRequest {
    nameBook: string;
    description: string;
    cost: number;
    quantity: number
}
export interface RemoveCard {
    allCards: Array<Cards>
}
export interface ShowCardRequest {
    nameBook: string;
    description: string;
    cost: number;
}
export interface AllCardRequest {
    cards: Array<Cards>
}