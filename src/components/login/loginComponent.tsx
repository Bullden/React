import * as React from "react";
import { LoginState, LoginRequest, ResultApiUser } from "@redux/login/types";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "../helpComponents/button";
import { ErrorComponent } from "@components/common/errorComponent";
import { Error } from "../common/errorComponent";
import { Redirect } from "react-router";
import { Path } from "../../Root";
import HomeContainer from "../../containers/homeContainer";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { doLogin } from "@redux/login/sagasLogin";
import { login } from "@redux/login/reducer";
import { environment } from "../../enviroment";
import CenteredTabs from "@components/helpComponents/tabs";

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  user: any;
  admin: any;
}
const admin: any = environment.admin;
const local: any = localStorage.getItem("user");

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
    !this.state.email || !this.state.password
      ? this.state.error
      : doLogin({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
        });
        

  };
  render() {
    console.log(this.props.user);
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
        {/* {"admin" === admin.name
          ? console.log("hi admin", admin)
          : console.log("you are not admin", admin)} */}
        {/* {console.log('nameAdmin',admin.name) }
        {console.log('mailAdmin',admin.email) }
        {console.log('passAdmin',admin.password)}
        {console.log('inputName',this.state.name)}
        {console.log('inputMail',this.state.email)}
        {console.log('inputpass',this.state.password)} */}
        { admin.email === this.state.email && admin.password === this.state.password ? <h1>hello you are my admin</h1> : null}
        
        { !this.state.email || !this.state.password ? (
          <Error />
        ) : null
        }

        {local ? <h1>{JSON.parse(local).name}</h1> : null}

        {/* {this.props.user == localStorage.getItem("user") ? <h1>hello! {this.props.user.name}</h1> : <h1>nope</h1>} */}
        {console.log(this.props.user)}
        {/* {this.props.user ? <h1>Hi, {this.props.user.name}</h1> : null} */}

        <div>
          {/* <InputLabel
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
          /> */}
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
