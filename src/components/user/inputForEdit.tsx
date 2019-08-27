import * as React from "react";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "@components/helpComponents/button";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import { LoginRequest } from "@redux/login/types";
// import {doLogin} from '../../redux/login/actions'

// export interface ModalInputProps {
//     doLogin: (data: LoginRequest) => object;
//     name: string;
//     password: string;
//     email: string;
//     // loadBooks: () => void
//     // handleClose: () => void
// }

export class InputForEdit extends React.Component<any, any> {
    state = {
        name: '',
        password :'',
        email: ''
    }

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  saveChanges = () => {
    const name = this.props.name
    const newSave = {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
    };


}  
  render() {
    // const {user} = this.props
    const name = this.props.name
    const password = this.props.name
    const email = this.props.name
    return (
      <div>
          {console.log('fAAAAAAAAASSSSSSSSSSSSS',name,password,email)}
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
            htmlFor="email"
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
        <InputLabel
          htmlFor="password"
          className="input-label"
          style={{ marginBottom: "5px" }}
        >
          Password
        </InputLabel>
        <Input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle}
          className="input"
          style={{ marginBottom: "20px" }}
        />
        <div>
          <ButtonComponent text="Save" click={() => this.saveChanges()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state:RootState) {
    return {
        name: state.login.token,
        password: state.login.token,
        email: state.login.token
    }
}
export default connect(mapStateToProps,{})(InputForEdit)