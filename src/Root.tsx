import * as React from "react";
import { Provider, connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

//import BooksTableContainer from "./containers/BooksTableContainer";
//import AuthorTableContainer from "./containers/AuthorTableContainer";

import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";
import LoginContainer from "./containers/loginContainer";
import HomeContainer from "./containers/homeContainer";
import AdminUserContainer from './containers/adminUserPageContainer'
import AdminBookContainer from './containers/adminBookPageContainer'
import RegistrationContainer from "./containers/registrationContainer";
import CenteredTabs from "@components/helpComponents/tabs";
import fullDescription from "@components/home/fullDescription";
import LinearIndeterminate from "@components/helpComponents/loader";
import { login } from "@redux/login/reducer";


export const Path = {
  root: "/",
  login: "/login",
  registration: "/registration",
  adminUser: "/adminUserPage",
  adminBook:"/adminBookPage",
  bookDescription:'/description'
};

const store: Store<RootState> = configureStore();
// const load = this.props
const Root = () => (
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
       
       <CenteredTabs /> 
       {/* <LinearIndeterminate /> */}
        {/* <ul style={{ display: "flex", listStyle: "none", justifyContent:"space-around" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul> */}
        
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


// const mapStateToProps = function(state: RootState) {
//   return {
//     load: state.login.isLoading
//   };
// };
// connect(mapStateToProps)(Root)
// // export default connect(
// //   mapStateToProps,
// //   {removeCard}
// // )(store);
export default Root
