import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import UserModal from "../admin.userpage/admin.modal.user.table";
import {UserInitRequest } from "@redux/admin.userpage/types";
import { User } from "src/types/user";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import {doUsers} from '../../redux/admin.userpage/actions'

interface SimpleTableProps {
  doUsers: (data: UserInitRequest) => object
  users: Array<User>
}
interface SimpleTableState {
  users: Array<User>;
}
class SimpleTable extends React.Component<
  SimpleTableProps,
  SimpleTableState
> {
  userForDelete: any;
  constructor(props: SimpleTableProps) {
    super(props);
    this.state = {
      users: []
    };
  }
  loadUsers = async () => {
    const {doUsers} = this.props
    doUsers({
      users: this.state.users
    })   
  };
  componentDidMount() {
    this.loadUsers()
  }
  render() {
    const  users  = this.props.users;
    return (
      <div style={{ width: "100%", marginTop: "10px" }}>
        <Paper style={{ width: "100%" }}>
          <Table style={{ width: "100%" }}>
            <TableHead style={{ width: "100%" }}>
              <TableRow>
                <TableCell align="right">edit </TableCell>
                <TableCell align="right">id </TableCell>
                <TableCell align="right">name </TableCell>
                <TableCell align="right">email </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(row => (
                <TableRow key={row.name}>
                  <TableCell align="right" ><UserModal item={row} loadBooks={this.loadUsers}/></TableCell>
                  <TableCell align="right">
                  </TableCell>
                  <TableCell align="right">{row._id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = function(state: RootState) {
  return {
    users: state.changeUser.users
  };
};
export default connect(
  mapStateToProps,
  { doUsers }
)(SimpleTable);