import { AdminBookPageState } from "./types";
import { RootState } from "@redux/rootReducer";

export const initialState: AdminBookPageState = {
    bookForDelete: {},
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
        case`@@admin/BOOK_ALL`: {
          console.log(action.payload)
          return {
            ...state,
            allBooks: action.payload.data
          }
        }
        case `@@admin/BOOK_DELETE`: {
          console.log(action.payload)
          const bookForDelete = action.payload.bookForDelete
          return {
            ...state,
            bookForDelete
          }
        }
        case `@@admin/BOOK_SET`: {
          console.log(action.payload)
          const bookForDelete = action.payload.bookForDelete
          return {
            ...state,
            bookAdd: action.payload
          }
        }
        default:
            return state 
    }
}
export const adminBookPage = (state:RootState) => state.adminBookPage 