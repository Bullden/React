import React from "react";
import { RootState } from "@redux/rootReducer";
import { connect } from "react-redux";
import {showCard} from "../home/actionCards"
import { ShowCardRequest } from "./typesCards";
export interface ShowCardProps {
  showCard: ( data: ShowCardRequest) => object;
  card: any;
  description: any;
  nameBook:any;
}
export interface ShowCardState {
  description: string
}
class FullDescription extends React.Component<ShowCardProps,ShowCardState> {
  state:ShowCardState = {
    description:''
  }
  render(){
    const desc = this.props.card.description
    const nameBook = this.props.card.nameBook
    return(
      <div> 
        <div style ={{fontFamily:'sans-serif', fontSize:'25px'}}>Description for "{nameBook}"</div>
        <div style ={{fontFamily:'sans-serif', fontSize:'20px',paddingTop:'20px'}}>{desc}</div>
      </div>
      
    )
  }
}
const mapStateToProps = function(state: RootState) {
  return {
    card: state.cardPage.card
  };
};
export default connect(
  mapStateToProps,
  {showCard}
)(FullDescription);
