import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "../redux/rootReducer";
import { doLogin, doLogout } from "./login/sagasLogin";
import { onError } from "./common/errorSagas";
import { all } from "redux-saga/effects";
import { doRegistration } from "./registration/sagasRegistration";
import { doCards } from "./home/HomeSagas";
import { doBooks, doDeleteBook, setBook } from "./adminPage/sagasAdminBookPage"
import { doChangeUser, doUsers } from "../components/adminUserPage/sagasAdminUserPage";

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
