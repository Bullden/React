import { RootState } from "../../redux/rootReducer";
import { ChangeUserState } from './types'

export const initialState: ChangeUserState = {
  email: "",
  name: "",

};
console.log('FFFFFFFFFFFFFFF')
export function changeUserReducer(state: ChangeUserState = initialState, action:any) {
    switch(action.type) {
      
        case `@@changeUser/DO_CHANGEUSER`: {
          console.log('FFFFFFFFFFFFFFF',action.payload)
            return {
              
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        }
        default:
            return state
    }
}

export const changeUser = (state:RootState) => state.changeUser