import * as React from "react";
import {
  RegistrationState,
  RegistrationRequest,
  ResultApiUser
} from "@redux/registration/types";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "../helpComponents/button";
import { ErrorComponent } from "@components/common/errorComponent";
import { Error } from "../common/errorComponent";
import { Redirect } from "react-router";
import { Path } from "../../Root";
import HomeContainer from "../../containers/homeContainer";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export interface RegistrationProps {
  doRegistration: (data: RegistrationRequest) => object;
}

export class RegistrationComponent extends React.Component<
  RegistrationProps,
  RegistrationState,
  ResultApiUser
> {
  state: RegistrationState = {
    email: "",
    password: "",
    isLoading: true,
    error: "",
    name: ""
  };

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  login = () => {
    const { doRegistration } = this.props;
    !this.state.name || !this.state.email || !this.state.password
      ? this.state.error
      : doRegistration({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        });
  };
  render() {
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
        {this.state.isLoading ? <h1>Hello!</h1> : <h1>khm,no!</h1>}
        {!this.state.name || !this.state.email || !this.state.password ? (
          <Error />
        ) : (
          <h1 style={{ color: "green" }}>Fine!</h1>
        )}
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
