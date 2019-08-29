import { RootState } from "../../redux/rootReducer";
import { UserChangeState } from './types'

export const initialState: UserChangeState = {
  // email: "",
  // password: "",
//   isLoading: false,
//   error: "",
  name: "",
  // token:"",
//   isLoggedIn: false,
//   login:''
};

export function userChangeReducer(state: UserChangeState = initialState, action:any) {
    switch(action.type) {
      
        case `@@change/DO_CHANGE`: {
          console.log('FFFFFFFFFFFFFFF',action.payload)
            return {
              
                ...state,
                // email:action.payload,
                // name:action.payload,
                // password:action.payload,
                name: action.payload.name
            }
        }
        default:
            return state
    }
}

export const change = (state:RootState) => state.change