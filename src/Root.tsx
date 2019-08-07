import * as React from "react";
import { Provider } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

//import BooksTableContainer from "./containers/BooksTableContainer";
//import AuthorTableContainer from "./containers/AuthorTableContainer";

import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";
import LoginContainer from "./containers/loginContainer";
import HomeContainer from "./containers/homeContainer";
import RegistrationContainer from "./containers/registrationContainer";

export const Path = {
  root: "/",
  // topProducts: "/top",
  // products: "/products",
  login: "/login",
  registration: "/registration"
};

const store: Store<RootState> = configureStore();

export default () => (
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
        <ul style={{ display: "flex", listStyle: "none", justifyContent:"space-around" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        
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
        </main>

       
      </div>
    </Router>
  </Provider>
);