import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { doCards , doCard} from "./actionCards";
import { showCard } from "./actionCards";
import { RootState } from "@redux/rootReducer";
import {
  ShowCardRequest,
  AllCardRequest,
  DoCardsRequest,
  CardsPageActions,
  SetCardRequest
} from "./typesCards";
import { Redirect } from "react-router";
import { DebounceInput } from "react-debounce-input";
import { Cards } from "src/types/card";
import { async } from "q";
import { any } from "prop-types";

function createData(
  _id: any,
  nameBook: string,
  description: string,
  cost: number
) {
  return { _id, nameBook, description, cost };
}
export interface ModalInputProps {
  doCards: (data: DoCardsRequest) => object;
  showCard: (data: ShowCardRequest) => object;
  doCard: (data: SetCardRequest) => object;
  // nameBook: string;
  // description: string;
  // cost: string;
  cards: Array<Cards>;
  card: any
}
interface CardDataItem {
  nameBook: string;
  description: string;
  cost: number;
  _id: number;
}
interface CardBookState {
  cards: Array<Cards>;
  search: "";
  redirect: boolean;
}

export class SimpleCard extends React.Component<
  ModalInputProps,
  CardBookState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      cards: [],
      search: "",
      redirect: false,
    };
  }
  loadCardBooks = (event: any) => {
    // const { doCards } = this.props;
    // doCards({
    //   cards: this.state.cards
    // });

    const { cards } = this.props;

    (event: any) => this.setState({ search: event.target.value });
    //   const data = await fetch("http://localhost:4201/books", {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     }
    //   });
    //   const arrCards = await data.json();
    console.log('sdfsdfsfs',cards)
    const search = event.target.value;
    let formattedArr: Cards[] = [];
    cards.forEach((item: any) => {
      if (item.nameBook.includes(search)) {
        formattedArr.push(
          createData(item._id, item.nameBook, item.description, item.cost)
        );
        console.log("YEP!", formattedArr)
      } else null;
    });
      this.setState({
        cards: formattedArr
      });
      console.log(this.state.cards)
  };

  showBooks = () => {
    // const data = await fetch("http://localhost:4201/books", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // });
    // const arrCards = await data.json();
    // let formattedArr: CardDataItem[] = [];
    // arrCards.forEach((item: any) => {
    //   formattedArr.push(
    //     createData(item._id, item.nameBook, item.description, item.cost)
    //   );
    // });
    // this.setState({
    //   cardData: formattedArr
    // });
    const { doCards } = this.props;
    doCards({
      cards: this.state.cards
    });
    
    // const cards = this.props;
    // console.log(cards)
    // this.setState({
    //   cards: cards
    // })
    // console.log(this.state.cards)
  };
  click = (_id: number) => {
    this.props.cards.forEach((item, idx: any) => {
      const { doCard } = this.props;
      if (item._id === _id ) {
        let quantity = 1
        this.props.cards.forEach((i:any,idxx: any) => {
          if(i._id === _id) {
            quantity ++
          }
        })
        const newCard = {
          _id: item._id,
          nameBook: item.nameBook,
          description: item.description,
          cost: item.cost,
          quantity: quantity
        };
        doCard(newCard);
      }
    });
  };
  clicker = (_id: number) => {
    this.props.cards.forEach((item, idx: any) => {
      if (item._id === _id ) {
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
    // this.loadCardBooks()
    this.showBooks();

  }
  clickToRoute = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect === true && this.props.card._id) {
      return <Redirect push to={`/description/${this.props.card._id}`} />;
    } else null;
    // const { cardData } = this.state;
    const { cards } = this.props;
    console.log(cards);

    // this.setState({
    //   cards: cards
    // })
    // console.log(this.state.cards);
    return (
      <div>
        {/* <button onClick ={this.loadCardBooks}>jjdfvjdfv</button> */}
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
                onChange={this.loadCardBooks}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {cards.map(row => (
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
    allCards: state.cardPage.allCards,
    card: state.cardPage.card,
    cards: state.cardPage.cards
  };
};
export default connect(
  mapStateToProps,
  { doCards, showCard ,doCard }
)(SimpleCard);
