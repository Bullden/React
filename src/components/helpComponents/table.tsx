import React, {PureComponent} from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { environment } from "../../enviroment";
import { callApi } from "@services/api";
import { call } from "redux-saga/effects";
import { async } from "q";
import ButtonComponent from "./button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    }
  })
);

function createData(id: string, name: string, password: string, email: string) {
  return { id, name, password, email };
}

let rows: any[] = [];
//  [
//   createData("", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];
interface TableDataItem {
    id: string,
    name: string,
    password: string,
    email: string
}
interface SimpleTableProps {

}

interface SimpleTableState {
  tableData: TableDataItem[]
}

export default class SimpleTable extends PureComponent<SimpleTableProps,SimpleTableState> {
  constructor(props: SimpleTableProps) {
    super(props);
    this.state = {
      tableData: []
    }
  }
   // classes = useStyles({});
  loadUsers = async () => {
      const data = await fetch("http://localhost:3000/users", {
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          }
      });

      const arrUser = await data.json();
      //    arrUser.forEach(function(item:any) {
      //         rows.push(createData(item.id, item.name, item.password, item.email))
      //    })
      let formattedArr:TableDataItem[] = []
      arrUser.forEach((item: any) => {
          formattedArr.push(createData(item.id, item.name, item.password, item.email));
      });
      this.setState({
          tableData: formattedArr
      })
  };
  componentDidMount() {
      this.loadUsers()
  }
  render(){
    const {tableData} = this.state
      return (
          <div style = {{width: '100%', marginTop: "10px"}}>
              {/*<Paper className={this.classes.root}>*/}
                  {/*<Table className={this.classes.table}>*/}
              <Paper style = {{width: '100%'}}>
                  <Table style = {{width: '100%'}}>
                      <TableHead style = {{width: '100%'}}>
                          <TableRow>
                              <TableCell align="right">id </TableCell>
                              <TableCell align="right">name </TableCell>
                              <TableCell align="right">password </TableCell>
                              <TableCell align="right">email </TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {tableData.map(row => (
                              <TableRow key={row.name}>
                                  <TableCell align="right">{row.id}</TableCell>
                                  <TableCell align="right">{row.name}</TableCell>
                                  <TableCell align="right">{row.password}</TableCell>
                                  <TableCell align="right">{row.email}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </Paper>
              {/* <ButtonComponent text="users" click ={() => users()} /> */}
          </div>
      );
  }

}
