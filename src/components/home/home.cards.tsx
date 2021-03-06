import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { doCards, doCard } from "./actionCards";
import { showCard } from "./actionCards";
import { RootState } from "@redux/rootReducer";
import {
  ShowCardRequest,
  DoCardsRequest,
  SetCardRequest
} from "./typesCards";
import { Redirect } from "react-router";
import { DebounceInput } from "react-debounce-input";
import { Cards } from "src/types/card";

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
  cards: Array<Cards>;
  card: any;
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
      redirect: false
    };
  }
  loadCardBooks = (event: any) => {
    const { cards } = this.props;
    (event: any) => this.setState({ search: event.target.value });
    const search = event.target.value;
    let formattedArr: Cards[] = [];
    cards.forEach((item: any) => {
      if (item.nameBook.includes(search)) {
        formattedArr.push(
          createData(item._id, item.nameBook, item.description, item.cost)
        );
      } else null;
    });
    this.setState({
      cards: formattedArr
    });
  };

  showBooks = () => {
    const { doCards } = this.props;
    doCards({
      cards: this.state.cards
    });
  };
  click = (_id: number) => {
    this.props.cards.forEach((item, idx: any) => {
      const { doCard } = this.props;
      if (item._id === _id) {
        let quantity = 1;
        this.props.cards.forEach((i: any, idxx: any) => {
          if (i._id === _id) {
            quantity++;
          }
        });
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
      if (item._id === _id) {
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
    this.showBooks();
  }
  clickToRoute = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect === true && this.props.card._id) {
      return <Redirect push to={`/description/${this.props.card._id}`} />;
    } else null;
    const { cards } = this.props;
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
  { doCards, showCard, doCard }
)(SimpleCard);
