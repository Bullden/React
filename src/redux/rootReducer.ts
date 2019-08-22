import { RegistrationState } from './registration/types';
import { Reducer, combineReducers } from "redux";
import { LoginState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./common/reducer";
import { HomeState } from "./home/types";
import { registrationReducer } from './registration/reducer';
import { AdminPageState, AdminBookPageState } from './adminPage/types';
import { adminPageReducer } from './adminPage/reducer';
import { adminBookPageReducer } from './adminPage/reducerBook';
import { CardsPageState } from '@components/home/typesCards';
import { CardPageReducer } from '@components/home/reducerCards';
// import { RegisterState } from "./register/types";
// import { registerReducer } from "./register/reducer";
// import { BooksReducer } from "./booksPage/reducer";
// import { BookState } from "./booksPage/types";

export interface RootState {
  error: string;
  login: LoginState;
  // register : RegisterState;
  home: HomeState;
  registration: RegistrationState;
  adminPage: AdminPageState;
  adminBookPage: AdminBookPageState,
  cardPage: CardsPageState;
  // books : BookState
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  // register : registerReducer,
  home: homeReducer,
  registration: registrationReducer,
  adminPage: adminPageReducer,
  adminBookPage : adminBookPageReducer,
  cardPage: CardPageReducer
});

export default rootReducer;