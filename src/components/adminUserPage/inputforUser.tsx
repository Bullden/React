import * as React from "react";
import { InputLabel, Input } from "@material-ui/core";
// import { runInThisContext } from "vm";
import ButtonComponent from "@components/helpComponents/button";
import { number } from "prop-types";
import { connect } from "react-redux";
import { RootState } from "@redux/rootReducer";
import { SetBookRequest } from "@redux/adminPage/types";
import { doChangeUser } from "./actions" 
import { async } from "q";
import { ChangeUserRequest } from "./types";
import { changeUser } from "./reducer";
 


export interface ModalInputProps {
    doChangeUser: (data: ChangeUserRequest) => object;
    name: string;
    email: string;
    loadBooks: () => void
    handleClose: () => void
    item?: any
}
export interface ModalInputState {
    name: string;
    email: string;
}
export class Inputs extends React.Component<ModalInputProps,ModalInputState> {
  
    state:ModalInputState = {
        name: '',
        email: ''
    }

  handle = (event:any) => 
    this.setState({ [event.target.name]:event.target.value } as any)

  changeUser =  async () => {
      const{doChangeUser, loadBooks, handleClose, item} = this.props
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: item.password,
        _id: item._id,
        role: item.role
      }
    
      doChangeUser(newUser)
      console.log(item)
      console.log(newUser)

      fetch (`http://localhost:3000/v1/users/:${item._id}`,{
        method:"PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(() => {
        loadBooks()
        handleClose()
      })
      console.log(newUser)
      console.log(JSON.stringify(newUser))
      
  }
  
  render() {

    return (
        
      <div>
          {console.log(this.state.name, this.state.email)}

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
        email: state.changeUser.email,
    }
}
export default connect(mapStateToProps, { doChangeUser })(Inputs)