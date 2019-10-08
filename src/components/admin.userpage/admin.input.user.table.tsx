import * as React from "react";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "@components/help.components/button";
import { connect } from "react-redux";
import { RootState } from "@redux/rootReducer";
import {
  doChangeUser,
  userForDelete
} from "../../redux/admin.userpage/actions";
import {
  ChangeUserRequest,
  UserForDelete
} from "../../redux/admin.userpage/types";

export interface ModalInputProps {
  doChangeUser: (data: ChangeUserRequest) => object;
  name: string;
  email: string;
  loadBooks: () => void;
  handleClose: () => void;
  userForDelete: (data: UserForDelete) => object;
  item?: any;
}
export interface ModalInputState {
  name: string;
  email: string;
}
export class Inputs extends React.Component<ModalInputProps, ModalInputState> {
  state: ModalInputState = {
    name: "",
    email: ""
  };
  handle = (event: any) => {
    this.setState({ [event.target.name]: event.target.value } as any);
  };
  changeUser = async () => {
    const { userForDelete } = this.props;
    userForDelete({
      user: this.props.item
    });

    const { doChangeUser, loadBooks, handleClose, item } = this.props;
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: item.password,
      _id: item._id,
      role: item.role
    };

    doChangeUser(newUser);
  };
  render() {
    return (
      <div>
        <div>
          <InputLabel
            htmlFor="name"
            className="input-label"
            style={{ marginBottom: "5px" }}
          >
            Name
          </InputLabel>
          <Input
            type="name"
            name="name"
            value={this.state.name}
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
            Email
          </InputLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handle}
            aria-describedby="passsword"
            className="inputt"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <div>
          <ButtonComponent text="Change User" click={() => this.changeUser()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state: RootState) {
  return {
    name: state.changeUser.name,
    email: state.changeUser.email
  };
};
export default connect(
  mapStateToProps,
  { doChangeUser, userForDelete }
)(Inputs);
