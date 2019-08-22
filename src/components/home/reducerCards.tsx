import { RootState } from "@redux/rootReducer";
import { CardsPageActions, CardsPageState } from "./typesCards";

export const initialState: CardsPageState = {
    card:"",
    allCards : []
}

export function CardPageReducer(state: CardsPageState = initialState, action:any){
    console.log('actio.payload',action.payload)
      switch (action.type) {
          case `@@admin/CARD_INIT`: {
            console.log('action.payload',action.payload)
          // const { data } = ;
          // console.log('data',data)
  
          let newState = JSON.parse(JSON.stringify(state))
  
          console.log('oldNewState',newState)
          console.log('state',state)
          newState.allCards.push(action.payload)
            console.log('newState',newState)
            return{
              ...state,
              card: action.payload,
              allCards: newState.allCards
            };  
          }
          default:
              return state 
      }
  }
  export const adminBookPage = (state:RootState) => state.cardPage 