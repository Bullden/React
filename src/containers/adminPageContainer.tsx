import { RootState } from "../redux/rootReducer";
import { AdminComponent } from "../components/adminPage/adminPageComponent";
import { connect } from "react-redux";
import { doAdminInit } from "../redux/adminPage/actions";

const mapStateToProps = (state: RootState) => ({
    enviroment: state.home.enviroment,
    user: state.login.token,
  });
  
  export default connect(
    mapStateToProps,
    { doAdminInit }
  )(AdminComponent);



