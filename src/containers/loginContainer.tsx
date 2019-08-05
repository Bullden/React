import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
//import { doLoginSuccess } from "@redux/login/actions";
//import { getData } from "@redux/login/reducer";
import { LoginComponent } from "../components/login/loginComponent";
import { doLogin } from "../redux/login/actions";

const mapStateToProps = (state: RootState) => ({
  email: state.login.email,
  password: state.login.password,
  isLoading: state.login.isLoading
});

export default connect(
  mapStateToProps,
  { doLogin }
)(LoginComponent);
