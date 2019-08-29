import * as React from "react";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "@components/helpComponents/button";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import { LoginRequest } from "@redux/login/types";
import {doUserChange} from './actions'
import { UserChangeRequest } from "./types";
// import {doLogin} from '../../redux/login/actions'

export interface ModalInputProps {
    doUserChange: (data: UserChangeRequest) => object;
     name: string;
    //  password: string;
    //  email: string;
    // token: string
    // loadBooks: () => void
    // handleClose: () => void
}
export interface UserChangeState {
  name: string;
  // password: string;
  // email: string;
  
  // token:string
}

class InputForEdit extends React.Component<ModalInputProps, UserChangeState> {
    state:UserChangeState = {
        name: '',
        // password :'',
        // email: '',
        // token:''
       
    }

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

    
  saveChanges = () => {
    const {doUserChange} = this.props
    const newSave = {
        name: this.state.name,
        // password: this.state.password,
        // email: this.state.email,
        // token:this.state.token
    };
    // var o = {
    //   "Gray": "11",
    //   "Black": "18"
    // };
    
    // for (var key in o) {
    //   if(key === "Gray") {
    //     o[key] = 232434
    //   } else null
    //   console.log(key, ':', o[key]);
    // }




    const local: any = localStorage.getItem('user')
    const localParce = JSON.parse(local)
    console.log('localStorage',localParce)
    

    for(var key in localParce) {
      if(key ==='name'){
        localParce[key] = newSave.name
      } else null
      // console.log('MAAAAAAAAAINN', key, ':', localParce[key])
      // console.log('!!!!!!!!!!!!!!',localParce) 
       
    }

    let id =  JSON.parse(local).id
    // let name = JSON.parse(local).name

    // let newLocal = 
    if(localParce.name === newSave.name) {
      localParce.name = newSave.name
      localStorage.setItem('user',JSON.stringify(localParce))
      fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(localParce)
    })
    .then(res => res.json()) // OR res.json()
    .then(res => console.log(res));


    }else null

    console.log("dsfffffffff!!!!!",JSON.parse(local).id)
    // console.log('cammmmp',local.id)
    console.log('dddvdvdvd!!!!!!!!!!!!!dv',newSave.name)

    
    doUserChange(newSave)
    console.log('doUserChange',doUserChange(newSave))

}  
  render() {
    const local: any = localStorage.getItem('user')
    // const {user} = this.props
    // const name = this.props.name
    // const password = this.props.name
    // const email = this.props.name
    return (
      <div>
        <div>Hello, { JSON.stringify(local.name)} </div>
          {/* {console.log('fAAAAAAAAASSSSSSSSSSSSS',name,password,email)} */}
          {console.log(this.state.name)}
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
        {/* <div>
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
        </div> */}
        {/* <InputLabel
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
        /> */}
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
        // password: state.change.password,
        // email: state.change.email,
        // token: state.change
    }
}
export default connect(mapStateToProps,{ doUserChange })(InputForEdit)