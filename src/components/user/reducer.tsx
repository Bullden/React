import { RootState } from "../../redux/rootReducer";
import { UserChangeState } from './types'

export const initialState: UserChangeState = {
  name: "",
};

export function userChangeReducer(state: UserChangeState = initialState, action:any) {
    switch(action.type) {
        case `@@change/DO_CHANGE`: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        default:
            return state
    }
}
export const change = (state:RootState) => state.change