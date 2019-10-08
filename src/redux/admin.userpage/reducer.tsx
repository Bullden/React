import { RootState } from "../../redux/rootReducer";
import { ChangeUserState } from "./types";

export const initialState: ChangeUserState = {
  email: "",
  name: "",
  users: [],
  user: {}
};
export function changeUserReducer(
  state: ChangeUserState = initialState,
  action: any
) {
  switch (action.type) {
    case `@@changeUser/USER_ALL`: {
      return {
        ...state,
        users: action.payload.data.users
      };
    }
    case `@@changeUser/USER_FOR_DELETE`: {
      return {
        ...state,
        user: action.payload
      };
    }
    case `@@changeUser/DO_CHANGEUSER`: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      };
    }
    default:
      return state;
  }
}

export const changeUser = (state: RootState) => state.changeUser;
