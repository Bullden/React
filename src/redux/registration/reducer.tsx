import { RootState } from "../../redux/rootReducer";
import { RegistrationState } from "./types";

export const initialState: RegistrationState = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
  name: ""
};

export function registrationReducer(state: RegistrationState = initialState, action: any) {
  switch (action.type) {
    case `@@registration/DO_REGISTRATION`: {
      return {
        ...state,
        isLoading: true
      };
    }
    case `@@registration/REGISTRATION_FAILED`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        isLoading: false,
        error: 'error'
      };
    }

    case `@@registration/REGISTRATION_SUCCESS`: {
      const { data } = action.payload;
      return {
        ...state,
        token: data,
        isLoading: true
      };
    }

    default:
      return state;
  }
}

export const registration = (state: RootState) => state.registration;