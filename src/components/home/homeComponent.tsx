import React from "react";
import { HomeState } from "../../redux/home/types";
import { Error } from "../common/errorComponent";
import { Product } from "../../types";
import { AppBar, Typography } from "@material-ui/core";
//import { doInit } from "@redux/home/actions";
// import Headers from '../header/headerComponent';
import { makeStyles } from '@material-ui/styles';

export interface HomeProps {
  error: string;
  products: Product[];
  count : number
  doInit: () => void;
}

export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    error: "",
    enviroment: "",
    products: []
  };

  init = () => {
    const { doInit } = this.props;
    doInit();
  };

  render() {
    //  const isExpanded = this.state ? this.state.isExpanded : false;
    // const classes = useStyles();
    return (
      <div className="wrapper"> 
        {/* <Error /> */}
        <h1>
          Hi welcome to store, enviroment : {process.env.NODE_ENV} <b />
        </h1>
        <div>
        
          {this.props.products.map((i, ix) => {
            return (
              <div className="ProductList__Product" key={ix}>
                <span>
                  {i.name} : {i.price}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    console.log("init");
    this.init();
  }
}