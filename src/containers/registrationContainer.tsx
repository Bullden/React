import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";

import { RegistrationComponent } from "../components/registration/registrationComponent";
import { doRegistration } from "../redux/registration/actions";
import { environment } from '../enviroment'

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