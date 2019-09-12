import { RootState } from "@redux/rootReducer";
import { CardsPageState } from "./typesCards";

export const initialState: CardsPageState = {
    card:"",
    allCards : [],
    cardLength: '',
    quantity: ''
}
export function CardPageReducer(state: CardsPageState = initialState, action:any){
      switch (action.type) {
          case `@@card/CARD_INIT`: { 
          let newState = JSON.parse(JSON.stringify(state))      
          let doesExist = newState.allCards.find((x: any) => { return x._id === action.payload._id});
         if(doesExist){
          newState.allCards.forEach((item:any) => {
            if(item._id === action.payload._id) {
              item.quantity ++
            }   
         })
         } else {
          newState.allCards.push(action.payload) 
         }
          let length = newState.allCards.length  
            return{
              ...state,
              card: action.payload,
              allCards: newState.allCards,
              cardLength: length
            };  
          }
          case `@@card/CARD_DELETE`: {
             let newState = JSON.parse(JSON.stringify(state))
             newState.allCards = action.payload;
             return newState;
          }
          case `@@card/CARD_SHOW`: {
            return{
               ...state,
              card: action.payload
            } 
          }
          default:
              return state 
      }
  }
  export const adminBookPage = (state:RootState) => state.cardPage 