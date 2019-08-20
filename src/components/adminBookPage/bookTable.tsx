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
import { doBook } from "../../redux/adminPage/actions" 

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
  // id: number,
  nameBook: string,
  description: string,
  cost: number
) {
  return { nameBook, description, cost };
}
let rows: any[] = [];
// const rows = [
//   createData(1, "Harry Potter", "fine book!", 100),
//   createData(2, "Ice Cream", "lalalalalalalalala", 50),
//   createData(3, "Iternet for teapot", "aahahahah yep!", 3000),
//   // createData(4,  nameBook, this.state.description, this.state.cost)
// ];
// const classes = useStyles({});

export class SimpleTable extends PureComponent<any,any> {
  // constructor(props: any) {
  //   super(props);
  // }
//   addBook() {
//     OpenModal(true)
//   }
  // addBooks = () => {
    
  // }

  // componentDidMount() {
  //   this.addBooks();
  //   // this.deleteUser();
  // }
  render():JSX.Element {
    const book = this.props.book
    const allBooks = this.props.allBooks
    console.log("AAAAAAAAAA",allBooks);
    rows=[];
    allBooks.forEach((item:any) => {
      rows.push(createData(item.nameBook, item.description, item.cost))
    });
      fetch ('http://localhost:3001/books',{
        method:"POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(allBooks)
      })
      .then(res => res.json())


    console.log('rowssss',rows)

    return (
      <div>
        {/*  */}
        <SimpleModal></SimpleModal>
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                {/* <TableCell>Id</TableCell> */}
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Descripton</TableCell>
                <TableCell align="right">Cost</TableCell>
                {/* <TableCell align="right">Image</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.nameBook}>
                  {/* <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell> */}
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
const mapStateToProps=function(state:RootState) {
  return{
    // nameBook: state.adminBookPage.book.nameBook,
    // description: state.adminBookPage.book.description,
    // cost: state.adminBookPage.cost
    book: state.adminBookPage.book,
    allBooks: state.adminBookPage.allBooks
  }
}
export default connect(mapStateToProps, {doBook})(SimpleTable)