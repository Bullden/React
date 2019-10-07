import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { RegistrationComponent } from "../components/registration/registration.component";
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