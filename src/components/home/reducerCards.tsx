import { RootState } from "@redux/rootReducer";
import { CardsPageActions, CardsPageState } from "./typesCards";
import { number } from "prop-types";

export const initialState: CardsPageState = {
    card:"",
    allCards : [],
    cardLength: ''
}

export function CardPageReducer(state: CardsPageState = initialState, action:any){
    // console.log('actio.payload',action.payload)
      switch (action.type) {
          case `@@card/CARD_INIT`: {
            // console.log('action.payload',action.payload)
          // const { data } = ;
          // console.log('data',data)
  
          let newState = JSON.parse(JSON.stringify(state))
  
          console.log('oldNewState',newState)
          console.log('state',state)
          let length = newState.allCards.length  
          newState.allCards.push(action.payload)
            console.log('newState',newState)
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
            // console.log('romoveeeeeeeee',action.payload)
            // return {
            //   ...state,
            //   allCards: action.payload
            // }
          }
          case `@@card/CARD_SHOW`: {
            console.log('action.payloaddddddddddd',action.payload)
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