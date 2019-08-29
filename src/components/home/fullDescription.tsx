





// import React from "react";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Popover from "@material-ui/core/Popover";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import { SimpleCard } from "./homeCards";
// import { RootState } from "@redux/rootReducer";
// import { connect } from "react-redux";
// import {showCard} from "../home/actionCards"
// import { ShowCardRequest } from "./typesCards";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     typography: {
//       padding: theme.spacing(2)
//     }
//   })
// );
// export interface ShowCardProps {
//   // showCard: ( data: ShowCardRequest) => object;
//   //  description: any[];
//   //  id: string;
//   data: () => void
// }

// export const BooksPopover = (props: ShowCardProps) => {
//   const classes = useStyles({});
//   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
//     null
//   );
//   function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//     setAnchorEl(event.currentTarget);
    
    
//     // const card = props.card.description
//     // const {showCard} = props.card;

//     // showCard(card)

//   }
//   // function click(){
//   //   const cardData = props.data;
//   //   cardData.forEach((item,idx:any) => {
//   //     if(item.id === id) {
//   //       console.log('item cardData',item , idx)
//   //       const{doCard} =this.props
//   //       const newCard = {
//   //         id: item.id,
//   //         nameBook: item.nameBook,
//   //         description: item.description,
//   //         cost: item.cost
//   //       }
//   // }
//   // function click( id :any) {
//   //   const cardData = props.description
//   //   cardData.forEach((item,idx)=>{
//   //     if(item.id === id) {
        
//   //     }
      
//   //   })
//   // }
//   // console.log('desc',props.description)
//   function handleClose() {
//     setAnchorEl(null);
//     // console.log('dfsdfsdf',props.card)
//   }
//   // const {showCard} = props.card;

//   // console.log("props", card);
//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} onClick={handleClick}>
//           Full description
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center"
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center"
//         }}
//       >
//         <Typography className={classes.typography}></Typography>
//       </Popover>
//     </div>
//   );
// };
// const mapStateToProps = function(state: RootState) {
//   return {
//     // nameBook: state.adminBookPage.book.nameBook,
//     // description: state.adminBookPage.book.description,
//     // cost: state.adminBookPage.cost
//     card: state.cardPage.card,
//     allCards: state.cardPage.allCards
//   };
// };

// export default connect(
//   mapStateToProps,
//   {showCard}
// )(BooksPopover);


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
    console.log('ca',desc)
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
