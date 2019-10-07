import { Book } from 'src/types/book';

export enum AdminPageActions {
    ADMIN_INIT = "ADMIN_INIT",
}
export enum AdminBookPageActions {
    BOOK_INIT = "BOOK_INIT",
    BOOK_ALL = "BOOK_ALL",
    BOOK_DELETE = "BOOK_DELETE",
    BOOK_DO_DELETE = "BOOK_DO_DELETE",
    BOOK_SET = "BOOK_SET",
    BOOK_ADD = 'BOOK_ADD'
}
export interface AdminPageState {
    enviroment: string;
    token: any;
    error: any;
}
export interface BookPageDeleteState {
    bookForDelete: Object
}
export interface BooksPageState {
    allBooks : Array<Book>;
}
export interface AdminBookPageState {
    bookForDelete: Object
    allBooks : Array<Book>;
}
export interface SetBookRequest {
    nameBook: string;
    description: string;
    cost: string;
}
export interface AddBookRequest {
    nameBook: string;
    description: string;
    cost: string;
}
