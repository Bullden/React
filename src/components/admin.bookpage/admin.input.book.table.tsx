import * as React from "react";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "@components/help.components/button";
import { connect } from "react-redux";
import { RootState } from "@redux/rootReducer";
import { SetBookRequest } from "@redux/admin.bookpage/types";
import { doBooks, setBook } from "../../redux/admin.bookpage/actions";
import { Error } from "../common/error.component";

export interface ModalInputProps {
  setBook: (data: SetBookRequest) => object;
}
export interface ModalInputState {
  nameBook: string;
  description: string;
  cost: string;
}
export class Inputs extends React.Component<ModalInputProps, ModalInputState> {
  state: ModalInputState = {
    nameBook: "",
    description: "",
    cost: ""
  };
  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);
  setBook = async () => {
    const { setBook } = this.props;
    setBook({
      nameBook: this.state.nameBook,
      description: this.state.description,
      cost: this.state.cost
    });
  };
  render() {
    return (
      <div>
        {!this.state.nameBook || !this.state.cost || !this.state.description ? (
          <Error />
        ) : null}
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
          <ButtonComponent text="Add book" click={this.setBook} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state: RootState) {
  return {
    // nameBook: state.adminBookPage.,
    // description: state.adminBookPage.book,
    // cost: state.adminBookPage.book
  };
};
export default connect(
  mapStateToProps,
  { doBooks, setBook }
)(Inputs);
