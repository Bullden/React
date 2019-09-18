import React, { PureComponent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonComponent from "@components/helpComponents/button";
import SimpleModal from "./modal";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import { doBook } from "../../redux/adminPage/actions";
import { async } from "q";

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
function createData(
  _id: string,
  nameBook: string,
  description: string,
  cost: number
) {
  return { _id, nameBook, description, cost };
}
let rows: any[] = [];
interface TableDataItem {
  _id: string;
  nameBook: string;
  description: string;
  cost: number;
}
interface TableBookState {
  tableData: TableDataItem[];
}
export class SimpleTable extends PureComponent<any, TableBookState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: []
    };
  }
  loadBooks = async () => {
    const data = await fetch("http://localhost:4201/books", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    this.setState({
      tableData: await data.json()
    });
    
    
    // arrBooks.data.forEach(function(item: any) {
    //   rows.push(
    //     createData(item._id, item.nameBook, item.description, item.cost)
    //   );
    // });
    // let formattedArr: TableDataItem[] = [];
    // arrBooks.data.forEach((item: any) => {
    //   formattedArr.push(
    //     createData(item._id, item.nameBook, item.description, item.cost)
    //   );
    // });
    // this.setState({
    //   tableData: formattedArr
    // });
  };
  
  componentDidMount() {
    this.loadBooks();
  }

  deleteBook(id: any){
    let arr = this.state.tableData;
    arr.forEach((item, idx: any) => {
      
      if (item._id == id) {   
        fetch(`http://localhost:4201/books/${+id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        })
          arr.splice(idx, 1)
      } 
    });
     this.setState(JSON.parse(JSON.stringify(arr)));
  }
  render() {
    const { tableData } = this.state;
    const allBooks = this.props.allBooks;
    rows = [];
    allBooks.forEach((item: any) => {
      rows.push(
        createData(item._id, item.nameBook, item.description, item.cost)
      );
    });
    return (
      <div>
        <SimpleModal loadBooks={this.loadBooks}/>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">Delete</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Descripton</TableCell>
                <TableCell align="right">Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map(row => (
                <TableRow key={row.nameBook}>                 
                  <TableCell align="right">
                    <ButtonComponent
                      text="Delete"
                      click={() => this.deleteBook(row._id)}
                    />
                  </TableCell>
                  <TableCell align="right">{row._id}</TableCell>
                  <TableCell align="right">{row.nameBook}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.cost}$</TableCell> 
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
    book: state.adminBookPage.book,
    allBooks: state.adminBookPage.allBooks
  };
};
export default connect(
  mapStateToProps,
  { doBook }
)(SimpleTable);
