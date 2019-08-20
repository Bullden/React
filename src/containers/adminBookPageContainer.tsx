import { RootState } from "../redux/rootReducer";
import { AdminBookComponent } from "../components/adminBookPage/adminBookPageComponent";
import { connect } from "react-redux";
import { doAdminInit } from "../redux/adminPage/actions";

const mapStateToProps = (state: RootState) => ({
    enviroment: state.home.enviroment,
    user: state.login.token,
  });
  
  export default connect(
    mapStateToProps,
    { doAdminInit }
  )(AdminBookComponent);
