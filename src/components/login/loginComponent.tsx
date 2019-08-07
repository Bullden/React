import * as React from "react";
import { LoginState, LoginRequest, ResultApiUser } from "@redux/login/types";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "../helpComponents/button";
import { ErrorComponent } from "@components/common/errorComponent";
import { Error } from "../common/errorComponent";
import { Redirect } from "react-router";
import {Path} from '../../Root'
import HomeContainer from '../../containers/homeContainer'
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { doLogin } from "@redux/login/sagasLogin";
import { login } from "@redux/login/reducer";

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  user : any;
}

export class LoginComponent extends React.Component<
  LoginProps,
  LoginState,
  ResultApiUser
> {
  state: LoginState = {
    email: "",
    password: "",
    isLoading: true,
    error: "",
    name: "",
    token: "",
  };

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  login = () => {
    const { doLogin } = this.props;
    !this.state.name || !this.state.email || !this.state.password 
    ? this.state.error 
    
      : (doLogin({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        }))
  };
  render() {
    console.log(this.props.user)
    return (
      <div
        className="panel"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >

        {!this.state.name || !this.state.email || !this.state.password ? (
          <Error />
        ) : (
          <h1 style={{ color: "green" }}>Fine!</h1>
        )}
        {/* {this.props.user == localStorage.getItem("user") ? <h1>hello! {this.props.user.name}</h1> : <h1>nope</h1>} */}
      {console.log(this.props.user)}
        {this.props.user ? <h1>Hi, {this.props.user.name}</h1> : <h1>Please let's login</h1> }


        <div>
          <InputLabel
            htmlFor="name"
            className="inputtt-label"
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
          <InputLabel
            htmlFor="email"
            className="input-label"
            style={{ marginBottom: "5px" }}
          >
            Email
          </InputLabel>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handle}
            className="input"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <div>
          <InputLabel
            htmlFor="password"
            className="inputt-label"
            style={{ marginBottom: "5px" }}
          >
            Password
          </InputLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle}
            aria-describedby="passsword"
            className="inputt"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <div>
          <ButtonComponent text="Login" click={() => this.login()} />
        </div>
      </div>
    );
  }
}
