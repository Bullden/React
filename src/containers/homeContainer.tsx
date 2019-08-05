import { RootState } from "../redux/rootReducer";
import { HomeComponent } from "../components/home/homeComponent";
import { connect } from "react-redux";
import { doInit } from "../redux/home/actions";

const mapStateToProps = (state: RootState) => ({
  error: state.error,
  products: state.home.products,
  enviroment: state.home.enviroment
});

export default connect(
  mapStateToProps,
  { doInit }
)(HomeComponent);