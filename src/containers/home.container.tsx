import { RootState } from "../redux/rootReducer";
import { HomeComponent } from "../components/home/home.component";
import { connect } from "react-redux";
import { doInit } from "../redux/home/actions";

const mapStateToProps = (state: RootState) => ({
  enviroment: state.home.enviroment,
  user: state.login.token,
});

export default connect(
  mapStateToProps,
  { doInit }
)(HomeComponent);