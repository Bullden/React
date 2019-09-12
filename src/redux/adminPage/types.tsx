import { Book } from 'src/types/book';

export enum AdminPageActions {
    ADMIN_INIT = "ADMIN_INIT",
}
export enum AdminBookPageActions {
    BOOK_INIT = "BOOK_INIT",
}
export interface AdminPageState {
    enviroment: string;
    token: any;
    error: any;
}
export interface AdminBookPageState {

    book: string;

    allBooks : Array<Book>;
}
export interface SetBookRequest {
    nameBook: string;
    description: string;
    cost: string;
}
