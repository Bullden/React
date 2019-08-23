import { Card } from "src/types/card";

export enum CardsPageActions {
    CARD_INIT = "CARD_INIT",
    CARD_DELETE = "CARD_DELETE"
}

export interface CardsPageState {
    card: string;
    allCards: Array<Card>
}

export interface SetCardRequest {
    nameBook: string;
    description: string;
    cost: string;
}
export interface RemoveCard {
    allCards: Array<Card>
}