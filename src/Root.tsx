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
       
       <CenteredTabs /> 
       
        
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
//     // nameBook: state.adminBookPage.book.nameBook,
//     // description: state.adminBookPage.book.description,
//     // cost: state.adminBookPage.cost
//     card: state.cardPage.card,
//     allBooks: state.adminBookPage.allBooks
//   };
// };
// export default connect(
//   mapStateToProps,
// )(Root);
export default Root
