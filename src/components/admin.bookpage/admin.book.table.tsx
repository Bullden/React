import React, { PureComponent } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonComponent from "@components/help.components/button";
import SimpleModal from "./admin.modal.book.table";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import { doBooks ,deleteBook, doDeleteBook } from "../../redux/admin.bookpage/actions";
import { Book } from "src/types/book";
import { BooksPageState, BookPageDeleteState } from "@redux/admin.bookpage/types";

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
    const { doBooks } = this.props;
    doBooks({
      allBooks: this.state.allBooks,
    });
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
        const { deleteBook } = this.props
        deleteBook({         
          bookForDelete: item,
        });
        const {doDeleteBook} =  this.props
        doDeleteBook({
          bookForDelete: item
        })
      } 
    });
  }
  render() {
    const allbooks = this.props.allBooks
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
