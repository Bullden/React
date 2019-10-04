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
import { doBooks ,deleteBook, doDeleteBook } from "../../redux/adminPage/actions";
import { async } from "q";
import { Book } from "src/types/book";
import { SetBookRequest, BooksPageState, BookPageDeleteState } from "@redux/adminPage/types";

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
interface TableBookProps {
  allBooks: Array<Book>
  doBooks: (data: BooksPageState) => object
  deleteBook :(data: BookPageDeleteState) => object
  doDeleteBook: (data: BookPageDeleteState) => object
  bookForDelete: Object
}
interface TableBookState {
  // tableData: TableDataItem[];
  allBooks : Array<Book>
  bookForDelete: Object
}
export class SimpleTable extends PureComponent<TableBookProps, TableBookState> {
  constructor(props: any) {
    super(props);
    this.state = {
      // tableData: [],
      allBooks: [],
      bookForDelete: ''
    };
  }
  loadBooks = async () => {
    // const data = await fetch("http://localhost:4201/books", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // })
    // this.setState({
    //   tableData: await data.json()
    // });
    
    const { doBooks } = this.props;
    doBooks({
      allBooks: this.state.allBooks,
      // bookForDelete: this.state.bookForDelete
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
    let arr = this.props.allBooks;
    console.log(arr)
    arr.forEach((item, idx: any) => {
       
      if (item._id == id) {   
        console.log(item)

        // const { deleteBook } = this.props
        // deleteBook({         
        //   bookForDelete: item
        // });
        const { deleteBook } = this.props
        deleteBook({         
          bookForDelete: item,
          // allBooks: this.state.allBooks
        });
        const {doDeleteBook} =  this.props
        doDeleteBook({
          bookForDelete: item
        })
        // fetch(`http://localhost:4201/books/${+id}`, {
        //   method: "DELETE",
        //   headers: { "Content-Type": "application/json",
        //   'Authorization': `Bearer ${localStorage.getItem('token')}` }
        // })
        //   arr.splice(idx, 1)
      } 
    });
    //  this.setState(JSON.parse(JSON.stringify(arr)));

  }
  render() {
    const allbooks = this.props.allBooks
    // const { tableData } = this.state;
    // const allBooks = this.props.allBooks;
    // rows = [];
    // allBooks.forEach((item: any) => {
    //   rows.push(
    //     createData(item._id, item.nameBook, item.description, item.cost)
    //   );
    // });
    return (
      <div>
        <SimpleModal/>
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
              {allbooks.map((row: any) => (
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
    bookForDelete: state.adminBookPage.bookForDelete,
    allBooks: state.adminBookPage.allBooks
  };
};
export default connect(
  mapStateToProps,
  { doBooks ,deleteBook, doDeleteBook}
)(SimpleTable);
