import * as React from "react";
import { InputLabel, Input } from "@material-ui/core";
// import { runInThisContext } from "vm";
import ButtonComponent from "@components/helpComponents/button";
import { number } from "prop-types";
import { connect } from "react-redux";
import { RootState } from "@redux/rootReducer";
import { SetBookRequest } from "@redux/adminPage/types";
import { doBook } from "../../redux/adminPage/actions" 
import { async } from "q";
 


export interface ModalInputProps {
    doBook: (data: SetBookRequest) => object;
    nameBook: string;
    description: string;
    cost: string;
    loadBooks: () => void
    handleClose: () => void
}
export interface ModalInputState {
  nameBook: string;
  description: string;
  cost: string;
}
export class Inputs extends React.Component<ModalInputProps,ModalInputState> {
  
    state:ModalInputState = {
        nameBook: '',
        description: '',
        cost: ''
    }

  handle = (event:any) => 
    this.setState({ [event.target.name]:event.target.value } as any)

  setBook =  async () => {
      const{doBook, loadBooks, handleClose} =this.props
      const newBook = {
        nameBook: this.state.nameBook,
        description: this.state.description,
        cost: this.state.cost,
      }

      doBook(newBook)

      const datta = await fetch ('http://localhost:3000/v1/books',{
        method:"POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
      })
      .then(res => res.json())
      .then(() => {
        loadBooks()
        handleClose()
      })
      
  }
  
  render() {

    return (
        
      <div>
          {console.log(this.state.nameBook, this.state.description, this.state.cost)}
        <div>
          <InputLabel
            htmlFor="nameBook"
            className="input-label"
            style={{ marginBottom: "5px" }}
          >
            Name
          </InputLabel>
          <Input
            type="nameBook"
            name="nameBook"
            value={this.state.nameBook}
            onChange={this.handle}
            className="input"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <div>
          <InputLabel
            htmlFor="description"
            className="inputt-label"
            style={{ marginBottom: "5px" }}
          >
            description
          </InputLabel>
          <Input
            id="description"
            type="description"
            name="description"
            value={this.state.description}
            onChange={this.handle}
            aria-describedby="passsword"
            className="inputt"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <InputLabel
          htmlFor="cost"
          className="input-label"
          style={{ marginBottom: "5px" }}
        >
          Cost
        </InputLabel>
        <Input
          type="cost"
          name="cost"
          value={this.state.cost}
          onChange={this.handle}
          className="input"
          style={{ marginBottom: "20px" }}
        />
        <div>
          <ButtonComponent text="Add book" click={() => this.setBook()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state: RootState) {
    return {
        nameBook: state.adminBookPage.book,
        description: state.adminBookPage.book,
        cost: state.adminBookPage.book
    }
}
export default connect(mapStateToProps, { doBook })(Inputs)