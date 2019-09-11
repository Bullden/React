import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { doCard } from "./actionCards";
import { showCard } from "./actionCards";
import { RootState } from "@redux/rootReducer";
import { SetCardRequest, ShowCardRequest } from "./typesCards";
import { Redirect } from "react-router";
import { InputLabel, Input } from "@material-ui/core";
import ButtonComponent from "@components/helpComponents/button";
import { debounce } from "lodash";
import { DebounceInput } from "react-debounce-input";
import { string } from "prop-types";

function createData(
  _id: any,
  nameBook: string,
  description: string,
  cost: number
) {
  return { _id, nameBook, description, cost };
}

let cards: any[] = [];

export interface ModalInputProps {
  doCard: (data: SetCardRequest) => object;
  showCard: (data: ShowCardRequest) => object;
  nameBook: string;
  description: string;
  cost: string;
}

interface CardDataItem {
  nameBook: string;
  description: string;
  cost: number;
  _id: string;
}
interface CardBookState {
  cardData: CardDataItem[];
  nameBook: string;
  description: string;
  cost: string;
  redirect: boolean;
  search: string;
}

export class SimpleCard extends React.Component<any, CardBookState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cardData: [],
      nameBook: "",
      description: "",
      cost: "",
      redirect: false,
      search: ""
    };
  }

 

  loadCardBooks = async (event:any) => {
    (event:any) => this.setState({search: event.target.value})
    console.log('fdgdfdfd',event, event.target.value)
    const data = await fetch("http://localhost:3000/v1/books", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    const arrCards = await data.json();
    console.log("arrBooks", arrCards.data);
   
    const search = event.target.value;
    console.log("FFFFFFFFFFFFF", search);
    let formattedArr: CardDataItem[] = [];
    arrCards.data.forEach((item: any) => {
      if (item.nameBook.includes(search)) {
        formattedArr.push(
          createData(item._id, item.nameBook, item.description, item.cost)
        );
      } else null;
    });

    this.setState({
      cardData: formattedArr
    });
    console.log("cardData", this.state.cardData);
  };

  showBooks = async () => {
    const data = await fetch("http://localhost:3000/v1/books", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const arrCards = await data.json();
    console.log("arrBooksFFFFFFFFFFF", arrCards.data);
    let formattedArr: CardDataItem[] = [];
    arrCards.data.forEach((item: any) => {
      formattedArr.push(
        createData(item._id, item.nameBook, item.description, item.cost)
      );
    });
    this.setState({
      cardData: formattedArr
    });
    console.log("cardDataFFFFFFFFFFF", this.state.cardData);
  };

  click = (_id: string) => {
    console.log("click", this.state.cardData);
    this.state.cardData.forEach((item, idx: any) => {
      if (item._id === _id ) {
        
        console.log("item cardData", item, idx);
        const { doCard } = this.props;
        const newCard = {
          _id: item._id,
          nameBook: item.nameBook,
          description: item.description,
          cost: item.cost
        };
        doCard(newCard);
      }
    });
  };

  clicker = (_id: string) => {
    console.log("clicker", this.state.cardData);
    this.state.cardData.forEach((item, idx: any) => {
      if (item._id === _id ) {
        
        console.log("item cardData", item, idx);
        const { showCard } = this.props;
        const newCard = {
          _id: item._id,
          nameBook: item.nameBook,
          description: item.description,
          cost: item.cost
        };
        showCard(newCard);
      }
    });
  };
 
  componentDidMount() {
    this.showBooks()
  }

  clickToRoute = () => {
    this.setState({ redirect: true });
  };

  render() {


    if (this.state.redirect === true && this.props.card._id ) {
      return <Redirect push to={`/description/${this.props.card._id}`} />;
    } else null;
    

    const { cardData } = this.state;
    
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px"
          }}
        >
          <div>
            <div>
             
              
              <DebounceInput
                minLength={2}
                debounceTimeout={1000}
                 onChange = {this.loadCardBooks}
                
              />
            </div>
            {/* <div>
              <ButtonComponent
                text="Show all books"
                click={() => this.showBooks()}
              />
            </div> */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {console.log(
            "JHDJLDHJLCB",
            this.state.nameBook,
            this.state.description,
            this.state.cost
          )}
          {cardData.map(row => (
            <Card style={{ marginTop: "20px" }}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Book
                </Typography>
                <Typography variant="h5" component="h2">
                  {row.nameBook}
                </Typography>
                <Typography color="textSecondary">{row.description}</Typography>
                <Typography variant="body2" component="p">
                  {row.cost}$
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => this.click(row._id)}>
                  Buy
                </Button>
                <div onClick={() => this.clicker(row._id)}>
                  <Button size="small" onClick={() => this.clickToRoute()}>
                    Show full Description
                  </Button>
                </div>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = function(state: RootState) {
  return {
    // nameBook: state.cardPage.card,
    // description: state.cardPage.card,
    // cost: state.cardPage.card
    allCards: state.cardPage.allCards,
    card: state.cardPage.card
  };
};

export default connect(
  mapStateToProps,
  { doCard,showCard }
)(SimpleCard);
