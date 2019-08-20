import { AdminBookPageState } from "./types";
import { RootState } from "@redux/rootReducer";



export const initialState: AdminBookPageState = {
    // nameBook: "",
    // description: "",
    // cost: "",
    // error: "",
    book: "",
    allBooks : []
};

export function adminBookPageReducer(state:AdminBookPageState = initialState, action:any){
  console.log('actio.payload',action.payload)
    switch (action.type) {
        case `@@admin/BOOK_INIT`: {
          console.log('action.payload',action.payload)
        // const { data } = ;
        // console.log('data',data)

        let newState = JSON.parse(JSON.stringify(state))

        console.log('oldNewState',newState)
        console.log('state',state)
        newState.allBooks.push(action.payload)
          console.log('newState',newState)
          return{
            ...state,
            book: action.payload,
            allBooks: newState.allBooks
          };   
          
        }
        default:
            return state 
    }
}
export const adminBookPage = (state:RootState) => state.adminBookPage 