import * as React from "react";
import { LoginState, LoginRequest, ResultApiUser } from "@redux/login/types";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "../helpComponents/button";
import { Error } from "../common/errorComponent";
import { Redirect } from "react-router";
import { environment } from "../../enviroment";
import { connect } from "react-redux";
import { RootState } from "@redux/rootReducer";

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  user: any;
  admin: any;
  isLoggedIn: boolean;
  isLoading: boolean
}
const fakeUser = {id:99,name:'fakeUser',password:'fakeUser',email:'fakeUser',permissions:['fakeUser'] };
const local: any = localStorage.getItem("user");

local ? null : localStorage.setItem("user",JSON.stringify(fakeUser))
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
    isLoggedIn: false,
    login: '',
    data: {}
  };
  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);
  login = () => {
    const { doLogin } = this.props;
    !this.state.email || !this.state.password
      ? this.state.error
      : doLogin({
          isLoggedIn: this.state.isLoggedIn,
          username: this.state.email,
          password: this.state.password,
          name: this.state.name
        });
  };
  render() {
    const local:any = localStorage.getItem('user')
    const parceLocal = JSON.parse(local)
    return (parceLocal.name === 'fakeUser' && parceLocal.email === 'fakeUser' ?
      <div
        className="panel"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      > 
        { !this.state.email || !this.state.password ? (
          <Error />
        ) : null
        }
        {local ? <h1>{JSON.parse(local).name}</h1> : null}
      <div>
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
      </div> : <Redirect to='/' />
    );
  }
}

const mapStateToProps =(state: RootState)=> ({
    isLoggedIn: state.login.isLoggedIn
  })

export default connect(mapStateToProps)(LoginComponent)