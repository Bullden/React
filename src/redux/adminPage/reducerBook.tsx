import { AdminBookPageState } from "./types";
import { RootState } from "@redux/rootReducer";

export const initialState: AdminBookPageState = {
    book: "",
    allBooks : []
};

export function adminBookPageReducer(state:AdminBookPageState = initialState, action:any){
    switch (action.type) {
        case `@@admin/BOOK_INIT`: {
        let newState = JSON.parse(JSON.stringify(state))
        newState.allBooks.push(action.payload)
          return{
            ...state,
            book: action.payload.card,
            allBooks: newState.allBooks
          };       
        }
        default:
            return state 
    }
}
export const adminBookPage = (state:RootState) => state.adminBookPage 