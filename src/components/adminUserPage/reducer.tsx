import { RootState } from "../../redux/rootReducer";
import { ChangeUserState } from './types'

export const initialState: ChangeUserState = {
  email: "",
  name: "",
};
export function changeUserReducer(state: ChangeUserState = initialState, action:any) {
    switch(action.type) {
      
        case `@@changeUser/DO_CHANGEUSER`: {
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