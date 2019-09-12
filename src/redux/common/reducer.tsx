import { RootState } from "../../redux/rootReducer";

export const initialState = {
  error: ""
};

export function errorReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case `@@ERROR_OCCURED`: {
      return state;
    }
    case `@@ERROR_SHOW`: {
      const { error } = action.payload;
      return error;
    }
    case `@@ERROR_HIDE`: {
      return {
        error: ""
      };
    }
    default:
      return state;
  }
}

export const error = (state: RootState) => state.error;