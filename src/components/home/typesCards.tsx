import { Card } from "src/types/card";

export enum CardsPageActions {
    CARD_INIT = "CARD_INIT",
    CARD_DELETE = "CARD_DELETE",
    CARD_SHOW = "CARD_SHOW"
}

export interface CardsPageState {
    card: string;
    allCards: Array<Card>;
    cardLength: any
    quantity: string
}

export interface SetCardRequest {
    nameBook: string;
    description: string;
    cost: string;
    quantity: string
}
export interface RemoveCard {
    allCards: Array<Card>
}
export interface ShowCardRequest {
    nameBook: string;
    description: string;
    cost: string;
    quantity: string
}