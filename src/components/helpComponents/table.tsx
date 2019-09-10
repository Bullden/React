// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import { Column, SortingState, IntegratedSorting, IntegratedSelection, EditingState } from '@devexpress/dx-react-grid';
// import { Grid, Table, TableHeaderRow, TableSelection, TableEditRow, TableEditColumn } from '@devexpress/dx-react-grid-material-ui';
// import { SelectionState } from '@devexpress/dx-react-grid';
// import {callApi} from '../../services/api';
// import { connect } from 'react-redux'
// import { RootState } from "../../redux/rootReducer";

// const columns: Column[] = [
//   { name: 'id', title: 'ID' },
//   { name: 'firstName', title: 'Name' },
//   { name: 'lastName', title: 'Surname' },
//   { name: 'email', title: 'E-mail' },
//   { name: 'age', title: 'Age' },
// ];
// interface UserProps {
//   usersData: any
// }
//   export const UsersTable: React.FC<UserProps> = props => {

//   const Arr = props.usersData;

//   const [selection, setSelection] = React.useState([]) as any;

//   const deleteUsers = () => {
//     let conf: boolean = window.confirm("Do you want to delete selected users?");
//     if (conf) {
//       selection.forEach((el: any) => {
//         let selectedUser = Arr.find((user: any) => (el + 1) === user.id);
//         if (selectedUser) {
//           callApi(`users/${el + 1}`, 'DELETE')
//         } else return
//       })
//     } else return
//   }

//   const getRowId = (Arr: { id: any; }) => Arr.id;
//   const [setRows] = React.useState([]) as any;
//   const commitChanges = ({ changed }: any) => {
//     let changedRows: any;
//     if (changed) {
//       changedRows = Arr.map((user: { id: React.ReactText; }) => (changed[user.id] ? { ...user, ...changed[user.id] } : user));
//     }
//     setRows(changedRows);
//   };

//   return (
//     <div>
//       {Arr ? (
//         <div>
//           <span>
//             Total rows selected:
//                       {' '}
//             {selection.length}
//           </span>
//           <span>
//             {selection.length > 0 ? (
//               <span>
//                 <button onClick={deleteUsers}>Delete all</button>
//               </span>) : (
//                 <span>
//                 </span>
//               )}
//           </span>
//           <Paper>
//             <Grid
//               rows={Arr}
//               columns={columns}
//               getRowId={getRowId}
//             >
//               <SortingState
//                 defaultSorting={[{ columnName: 'id', direction: 'asc' }]}
//               />
//               <SelectionState
//                 selection={selection}
//                 onSelectionChange={setSelection}
//               />
//               <IntegratedSelection />
//               <IntegratedSorting />
//               <EditingState
//                 onCommitChanges={commitChanges}
//               />
//               <Table />
//               <TableHeaderRow showSortingControls />
//               <TableSelection showSelectAll />

//               <TableEditColumn
//                 showEditCommand
//               />
//               <TableEditRow />
//             </Grid>
//           </Paper>
//         </div>

//       ) : (
//           <div>

//           </div>
//         )}
//     </div>
//   );
// }

// const mapStateToProps = (state: RootState) => ({
//   usersData: state.login.isLoggedIn
// });
// export default connect(mapStateToProps)(UsersTable);

import React, { PureComponent } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  withStyles
} from "@material-ui/core/styles";
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
import { array, number } from "prop-types";
import jwt_decode from 'jwt-decode';
import UserModal from "../adminUserPage/modal";



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

function createData(_id: string, name: string, email: string) {
  return { _id, name, email };
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
  _id: string;
  name: string;
  email: string;
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
  // classes = useStyles({});
  loadUsers = async () => {
    const data = await fetch("http://localhost:3000/v1/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    
    const arrUser = await data.json();
    console.log(arrUser.data)

    arrUser.data.forEach(function(item: any) {
      rows.push(createData(item._id, item.name, item.email));
    });
    let formattedArr: TableDataItem[] = [];
    arrUser.data.forEach((item: any) => {
      formattedArr.push(
        createData(item._id, item.name, item.email)
      );
    });
    this.setState({
      tableData: formattedArr
    });
  };
 
  componentDidMount() {
    this.loadUsers();
    // this.deleteUser();
  }
  deleteUser(_id: string) {
    // debugger
    let deleleUser:any=''
    let arr = this.state.tableData;

    arr.forEach((item,idx:any) => {
      if(item._id === _id)
       arr.splice(idx, 1);
    })
   // let arr = this.state.tableData.splice(deleleUser,1);
    console.log('array before set state',arr)
    // debugger;
    // this.state.tableData.splice(deleteUser,1)
    this.setState(JSON.parse(JSON.stringify(arr)) );
  }

  render() {
    const { tableData } = this.state;
    return (
      <div style={{ width: "100%", marginTop: "10px" }}>
        {/*<Paper className={this.classes.root}>*/}
        {/*<Table className={this.classes.table}>*/}
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
        {console.log("rows", rows)}
        {/* <ButtonComponent text="users" click ={() => users()} /> */}
      </div>
    );
  }
}
