import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
//import { doLoginSuccess } from "@redux/login/actions";
//import { getData } from "@redux/login/reducer";
import { RegistrationComponent } from "../components/registration/registrationComponent";
import { doRegistration } from "../redux/registration/actions";

const mapStateToProps = (state: RootState) => ({
  email: state.registration.email,
  password: state.registration.password,
  isLoading: state.registration.isLoading,
  name: state.registration.name
});

export default connect(
  mapStateToProps,
  { doRegistration }
)(RegistrationComponent);