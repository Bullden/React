import { UserChangeState } from './../components/user/types';
import { change, userChangeReducer } from './../components/user/reducer';
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
import { ChangeUserState } from '@components/adminUserPage/types';
import{ changeUserReducer } from '@components/adminUserPage/reducer'


export interface RootState {
  error: string;
  login: LoginState;
  home: HomeState;
  registration: RegistrationState;
  adminPage: AdminPageState;
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
  adminPage: adminPageReducer,
  adminBookPage : adminBookPageReducer,
  cardPage: CardPageReducer,
  change: userChangeReducer
});

export default rootReducer;