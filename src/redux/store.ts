import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "../redux/rootReducer";
import { doLogin, doLogout } from "./login/sagas.login";
import { onError } from "./common/sagas.error";
import { all } from "redux-saga/effects";
import { doRegistration } from "./registration/sagas.registration";
import { doCards } from "./home/sagas.home";
import { doBooks, doDeleteBook, setBook } from "./admin.bookpage/sagas.admin.bookpage"
import { doChangeUser, doUsers } from "./admin.userpage/sagas.admin.userpage";

export default function configureStore(
  initialState?: RootState
): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const composeEnhancers = composeWithDevTools({});
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState!, enhancer);
  if (module.hot) {
    module.hot.accept("@redux/rootReducer", () => {
      const nextRootReducer = require("@redux/rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(function*() {
    yield all([doLogin(),onError(),doRegistration(),doCards(),doBooks(),doDeleteBook(),setBook(),doUsers(),doChangeUser(),doLogout()]);
  });

  return store;
}
