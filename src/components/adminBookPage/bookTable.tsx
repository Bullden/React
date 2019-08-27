import React, { PureComponent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonComponent from "@components/helpComponents/button";
import { render } from "react-dom";
import SimpleModal from "./modal";
import { ModalInputProps, ModalInputState, Inputs } from "./inputForBook";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import { doBook } from "../../redux/adminPage/actions";

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
  id: string,
  nameBook: string,
  description: string,
  cost: number
) {
  return { id, nameBook, description, cost };
}
let rows: any[] = [];
// const rows = [
//   createData(1, "Harry Potter", "fine book!", 100),
//   createData(2, "Ice Cream", "lalalalalalalalala", 50),
//   createData(3, "Iternet for teapot", "aahahahah yep!", 3000),
//   // createData(4,  nameBook, this.state.description, this.state.cost)
// ];
// const classes = useStyles({});
interface TableDataItem {
  id: string;
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
  //   addBook() {
  //     OpenModal(true)
  //   }
  // addBooks = () => {

  // }
  loadBooks = async () => {
    const data = await fetch("http://localhost:3001/books", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const arrBooks = await data.json();
    console.log("arrBooks", arrBooks);
    arrBooks.forEach(function(item: any) {
      rows.push(
        createData(item.id, item.nameBook, item.description, item.cost)
      );
    });
    // const book = this.props.book
    let formattedArr: TableDataItem[] = [];
    arrBooks.forEach((item: any) => {
      formattedArr.push(
        createData(item.id, item.nameBook, item.description, item.cost)
      );
    });
    // console.log('formattedArrBefore',formattedArr)
    // formattedArr.push(book)
    // console.log('formattedArr',formattedArr)

    this.setState({
      tableData: formattedArr
    });

    console.log("async rows", rows);
  };

  componentDidMount() {
    this.loadBooks();
    // this.deleteUser();
  }
  deleteBook(id: string) {
    let arr = this.state.tableData;

    arr.forEach((item, idx: any) => {
      if (item.id === id) arr.splice(idx, 1);
      console.log("item.id", item.id);
      console.log("id", id);
      console.log("idx", idx);
      fetch(`http://localhost:3001/books/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.text()) // OR res.json()
        .then(res => console.log(res));
    });

    this.setState(JSON.parse(JSON.stringify(arr)));
  }

  

  render() {
    const { tableData } = this.state;
    const allBooks = this.props.allBooks;
    console.log("AAAAAAAAAA", allBooks);
    rows = [];
    allBooks.forEach((item: any) => {
      rows.push(
        createData(item.id, item.nameBook, item.description, item.cost)
      );
    });

    console.log("allBooks", allBooks);
    console.log("rows", rows);

    return (
      <div>
        <SimpleModal loadBooks={this.loadBooks} />
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell align="right">Edit</TableCell> */}
                <TableCell align="right">Delete</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Descripton</TableCell>
                <TableCell align="right">Cost</TableCell>
                {/* <TableCell align="right">Image</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map(row => (
                <TableRow key={row.nameBook}>
                  {/* <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell> */}
                  {/* <TableCell align="right">
                    <ButtonComponent
                      text="Edit"
                      click={() => this.editBook(row.id)}
                    />
                  </TableCell> */}
                  <TableCell align="right">
                    <ButtonComponent
                      text="Delete"
                      click={() => this.deleteBook(row.id)}
                    />
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.nameBook}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.cost}</TableCell>
                  {/* <TableCell align="right">{row.image}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
// const mapStateToProps = (state: RootState) => ({

// })
const mapStateToProps = function(state: RootState) {
  return {
    // nameBook: state.adminBookPage.book.nameBook,
    // description: state.adminBookPage.book.description,
    // cost: state.adminBookPage.cost
    book: state.adminBookPage.book,
    allBooks: state.adminBookPage.allBooks
  };
};
export default connect(
  mapStateToProps,
  { doBook }
)(SimpleTable);
