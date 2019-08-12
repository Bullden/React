import React from "react";
import { HomeState, HomeRequest, } from "../../redux/home/types";
import { Error } from "../common/errorComponent";
import { Product } from "../../types";
import { AppBar, Typography } from "@material-ui/core";
import { doInit } from "@redux/home/actions";
// import Headers from '../header/headerComponent';
import { makeStyles } from '@material-ui/styles';
import ButtonComponent from "@components/helpComponents/button";
import SimpleTable from '../helpComponents/table'
import { ResultApiUser } from "@redux/home/types";

export interface HomeProps {
  error: string;
  products: Product[];
  count : number;
  doInit: () => any;
  user: any;
}

export class HomeComponent extends React.Component<HomeProps, HomeState, ResultApiUser> {
  state: HomeState = {
    error: "",
    enviroment: "",
    products: [],
    token: "",
  };

  init = () => {
    const { doInit } = this.props;
    doInit();
  };

  logout =() => {
    localStorage.removeItem('user')
  }
  
  render() {
    console.log('userrrrr',this.props.user)
    //  const isExpanded = this.state ? this.state.isExpanded : false;
    // const classes = useStyles();
    return (
      <div className="wrapper"> 
        <SimpleTable />
        {/* <Error /> */}
        <h1>
          Hi welcome to store, enviroment : {process.env.NODE_ENV} <b />
        </h1>
        <div>
          
          {/* {this.props.products.map((i, ix) => {
            return (
              <div className="ProductList__Product" key={ix}>
                <span>
                  {i.name} : {i.price}
                </span>
              </div>
            );
          })} */}
        </div>
        <ButtonComponent text = "Logout" click={() =>this.logout()} />
      </div>
    );
  }
  async componentDidMount() {
    console.log(this.props.user)
    this.init();
    console.log("init");
  }
}