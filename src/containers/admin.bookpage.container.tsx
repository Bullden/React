import { RootState } from "../redux/rootReducer";
import { AdminBookComponent } from "../components/admin.bookpage/admin.bookpage.component";
import { connect } from "react-redux";
import { doAdminInit } from "../redux/admin.bookpage/actions";

const mapStateToProps = (state: RootState) => ({
    enviroment: state.home.enviroment,
    user: state.login.token,
  });
  
  export default connect(
    mapStateToProps,
    { doAdminInit }
  )(AdminBookComponent);
