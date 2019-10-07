import { UserChangeState } from './../components/user/types';
import { userChangeReducer } from './../components/user/reducer';
import { RegistrationState } from './registration/types';
import { Reducer, combineReducers } from "redux";
import { LoginState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./common/reducer";
import { HomeState } from "./home/types";
import { registrationReducer } from './registration/reducer';
import { AdminBookPageState } from './admin.bookpage/types';
import { adminBookPageReducer } from './admin.bookpage/reducer';
import { CardsPageState } from '@components/home/typesCards';
import { CardPageReducer } from '@components/home/reducerCards';
import { ChangeUserState } from '@redux/admin.userpage/types';
import{ changeUserReducer } from '../redux/admin.userpage/reducer'


export interface RootState {
  error: string;
  login: LoginState;
  home: HomeState;
  registration: RegistrationState;
  adminBookPage: AdminBookPageState,
  cardPage: CardsPageState;
  change: UserChangeState;
  changeUser: ChangeUserState

}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  changeUser: changeUserReducer,
  home: homeReducer,
  registration: registrationReducer,
  adminBookPage : adminBookPageReducer,
  cardPage: CardPageReducer,
  change: userChangeReducer
});

export default rootReducer;