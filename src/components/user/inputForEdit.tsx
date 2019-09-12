import * as React from "react";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "@components/helpComponents/button";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import {doUserChange} from './actions'
import { UserChangeRequest } from "./types";

export interface ModalInputProps {
    doUserChange: (data: UserChangeRequest) => object;
     name: string; 
}
export interface UserChangeState {
  name: string;
}
class InputForEdit extends React.Component<ModalInputProps, UserChangeState> {
    state:UserChangeState = {
    name: '', 
    }
  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any); 
  saveChanges = () => {
    const {doUserChange} = this.props
    const newSave = {
        name: this.state.name,  
    };
    const local: any = localStorage.getItem('user')
    const localParce = JSON.parse(local)
    for(var key in localParce) {
      if(key ==='name'){
        localParce[key] = newSave.name
      } else null 
    }
    let id =  JSON.parse(local)._id
    if(localParce.name === newSave.name) {
      localParce.name = newSave.name
      localStorage.setItem('user',JSON.stringify(localParce))
      fetch(`http://localhost:3000/v1/users/:${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(localParce)
    })
    .then(res => res.json()) 
    }else null 
    doUserChange(newSave)
}  
  render() {
    const local: any = localStorage.getItem('user')
  
    return (
      <div>
        <div>Hello, { JSON.parse(local).name} </div>
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
          <ButtonComponent text="Save" click={() => this.saveChanges()} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = function(state:RootState) {
    return {
        name: state.change.name,    
    }
}
export default connect(mapStateToProps,{ doUserChange })(InputForEdit)