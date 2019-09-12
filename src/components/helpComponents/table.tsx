import React, { PureComponent } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonComponent from "./button";
import UserModal from "../adminUserPage/modal";

function createData(_id: string, name: string, email: string, password:string, role:string) {
  return { _id, name, email, password, role };
}
let rows: any[] = [];
interface TableDataItem {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}
interface SimpleTableProps {}
interface SimpleTableState {
  tableData: TableDataItem[];
}
export default class SimpleTable extends PureComponent<
  SimpleTableProps,
  SimpleTableState
> {
  constructor(props: SimpleTableProps) {
    super(props);
    this.state = {
      tableData: []
    };
  }
  loadUsers = async () => {
    const data = await fetch("http://localhost:3000/v1/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const arrUser = await data.json();
    arrUser.data.forEach(function(item: any) {
      rows.push(createData(item._id, item.name, item.email, item.password, item.role));
    });
    let formattedArr: TableDataItem[] = [];
    arrUser.data.forEach((item: any) => {
      formattedArr.push(
        createData(item._id, item.name, item.email, item.password, item.role)
      );
    });
    this.setState({
      tableData: formattedArr
    });
  };
  componentDidMount() {
    this.loadUsers()
  }
  deleteUser(_id: string) {
    let arr = this.state.tableData;

    arr.forEach((item,idx:any) => {
      if(item._id === _id)
       arr.splice(idx, 1);
    })
    this.setState(JSON.parse(JSON.stringify(arr)) );
  }

  render() {
    const { tableData } = this.state;
    return (
      <div style={{ width: "100%", marginTop: "10px" }}>
        <Paper style={{ width: "100%" }}>
          <Table style={{ width: "100%" }}>
            <TableHead style={{ width: "100%" }}>
              <TableRow>
                <TableCell align="right">edit </TableCell>
                <TableCell align="right">delete </TableCell>
                <TableCell align="right">id </TableCell>
                <TableCell align="right">name </TableCell>
                <TableCell align="right">email </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map(row => (
                <TableRow key={row.name}>
                  <TableCell align="right"><UserModal item={row} loadBooks={this.loadUsers}/></TableCell>
                  <TableCell align="right">
                    <ButtonComponent
                      text="Delete"
                      click={() => this.deleteUser(row._id)}
                    />
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
