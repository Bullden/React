import { RootState } from "../redux/rootReducer";
import { AdminUserComponent } from "../components/adminUserPage/adminUserPageComponent";
import { connect } from "react-redux";
import { doAdminInit } from "../redux/adminPage/actions";

const mapStateToProps = (state: RootState) => ({
    enviroment: state.home.enviroment,
    user: state.login.token,
  });
  
  export default connect(
    mapStateToProps,
    { doAdminInit }
  )(AdminUserComponent);



