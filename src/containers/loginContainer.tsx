import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";

import { LoginComponent } from "../components/login/loginComponent";
import { doLogin } from "../redux/login/actions";

const mapStateToProps = (state: RootState) => ({
  email: state.login.email,
  password: state.login.password,
  isLoading: state.login.isLoading,
  name: state.login.name,
  user: state.login.token
});

export default connect(
  mapStateToProps,
  { doLogin }
)(LoginComponent);
