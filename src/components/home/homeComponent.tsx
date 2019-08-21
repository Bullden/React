import React from "react";
import { HomeState, HomeRequest, } from "../../redux/home/types";
import { Error } from "../common/errorComponent";
import { Product } from "../../types";
import { AppBar} from "@material-ui/core";
import { doInit } from "@redux/home/actions";
// import Headers from '../header/headerComponent';
import ButtonComponent from "@components/helpComponents/button";
// import SimpleTable from '../helpComponents/table'
import SimpleCard from "./homeCards";

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export interface HomeProps {
//   error: string;
//   books: Book[];
//   count : number;
//   doInit: () => any;
//   user: any;
// }

export class HomeComponent extends React.Component<any,any> {
  // state: HomeState = {
  //   error: "",
  //   enviroment: "",
  //   products: [],
  //   token: "",
  // };

  init = () => {
    const { doInit } = this.props;
    doInit();
  };

  logout =() => {
    localStorage.removeItem('user')
  }
  



  render() {
    console.log('userrrrr',this.props.user)

    return (
      <div className="wrapper"> 
        
        {/* <Error /> */}
        {/* <h1>
          Hi welcome to store, enviroment : {process.env.NODE_ENV} <b />
        </h1> */}
        <div>
          <SimpleCard />
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
}