import * as React from "react";
import { Provider, connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

//import BooksTableContainer from "./containers/BooksTableContainer";
//import AuthorTableContainer from "./containers/AuthorTableContainer";

import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";
import LoginContainer from "./containers/login.container";
import HomeContainer from "./containers/home.container";
import AdminUserContainer from './containers/admin.userpage.container'
import AdminBookContainer from './containers/admin.bookpage.container'
import RegistrationContainer from "./containers/registration.container";
import CenteredTabs from "@components/help.components/tabs";
import fullDescription from "@components/home/fullDescription";
import { doLogin } from "@redux/login/sagas.login";

export const Path = {
  root: "/",
  login: "/login",
  registration: "/registration",
  adminUser: "/adminUserPage",
  adminBook:"/adminBookPage",
  bookDescription:`/description`
};
const store: Store<RootState> = configureStore();
export const Root = () => (
  <Provider store={store}>
    <Router>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          width: "100%",
          marginTop: 20
        }}
      >
       <CenteredTabs/> 
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >  
          <Route exact path={Path.root} component={HomeContainer} />
          <Route path={Path.login} component={LoginContainer} />
          <Route path={Path.registration} component={RegistrationContainer} />
          <Route path={Path.adminUser} component ={AdminUserContainer} />
          <Route path={Path.adminBook} component ={AdminBookContainer} />
          <Route path ={Path.bookDescription} component = {fullDescription} />
        </main> 
      </div>
    </Router>
  </Provider>
);
export default Root
