import { RootState } from "../redux/rootReducer";
import { AdminUserComponent } from "../components/admin.userpage/admin.userpage.component";
import { connect } from "react-redux";
import { doAdminInit } from "../redux/admin.bookpage/actions";

const mapStateToProps = (state: RootState) => ({
    enviroment: state.home.enviroment,
    user: state.login.token,
  });
  
  export default connect(
    mapStateToProps,
    { doAdminInit }
  )(AdminUserComponent);



