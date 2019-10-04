import { RootState } from "../../redux/rootReducer";
import { LoginState } from "./types";

export const initialState: LoginState = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
  name: "",
  token:"",
  isLoggedIn: false,
  login:'',
  data: {}
};

export function loginReducer(state: LoginState = initialState, action: any) {
  switch (action.type) {
    case `@@login/DO_LOGIN`: {
      return {
        ...state,
        isLoading: true
      };
    }
    case `@@login/LOGOUT`: {
      console.log(action.payload.initialState);
      const {state} = action.payload.initialState
      return{
        ...state
      }
    }
    case `@@login/LOGIN_FAILED`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        isLoading: false,
        error: "error"
      };
    }

    case `@@login/LOGIN_SUCCESS`: {      
      const { data } = action.payload;
      return {
        ...state,
        data,
        isLoading: false,
        isLoggedIn: true
      };
    }
    
    default:
      return state;
  }
}

export const login = (state: RootState) => state.login;