import { Reducer, combineReducers } from "redux";
import { LoginState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./common/reducer";
import { HomeState } from "./home/types";
// import { RegisterState } from "./register/types";
// import { registerReducer } from "./register/reducer";
// import { BooksReducer } from "./booksPage/reducer";
// import { BookState } from "./booksPage/types";

export interface RootState {
  error: string;
  login: LoginState;
  // register : RegisterState;
  home: HomeState;
  // books : BookState
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  // register : registerReducer,
  home: homeReducer,
  // books : BooksReducer
});

export default rootReducer;