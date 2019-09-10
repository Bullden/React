import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import SimpleCard from "@components/home/homeCards";
import { RootState } from "@redux/rootReducer";
import { doCard } from "../home/actionCards";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import ButtonComponent from "./button";
import { func } from "prop-types";
import { SetCardRequest, RemoveCard } from "@components/home/typesCards";
import {removeCard} from "../home/actionCards"
import { all } from "q";

import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import withStyles  from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CustomizedBadges from "./badge";

// const StyledBadge1 = withStyles((theme: Theme) =>
//   createStyles({
//     badge: {
//       right: -3,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: '0 4px',
//     },
//   }),
// )(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2)
    }
  })
);
export interface CardsProps {
  removeCard: (data: RemoveCard ) => object;
}

export const SimplePopover = (props: any) => {
  const card = props.card;
  const allCards = props.allCards

  const allCosts = allCards.map(function(costs: any) {
    return +costs.cost;
  });
  const sumCosts = allCosts.reduce(function(sum: any, current: any) {
    return sum + current;
  }, 0);


  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }
  function remove (_id:any) {
    allCards.forEach((item:any,idx:any) => {
      if(item._id == _id)
      allCards.splice(idx,1)  
      console.log("item.id", item._id);
      console.log("id", _id);
      console.log("idx", idx);
    })
   
    const { removeCard } = props
    console.log('cardsaaaaa',allCards)
    removeCard(allCards)
    // console.log('docard',removeCard(allCards))
    
  }
  // console.log('cardsaaaaas',allCards)
  function removeAll() {
    allCards.forEach((item:any,idx:any) => {
      if(item._id >= 0)
      allCards.splice(idx,100)
    })
    const { removeCard } = props
    removeCard(allCards)
  }
  
  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  



  return (
    <div style={{ paddingTop: "4px" }}>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        style={{
          boxShadow: "none",
          background: "none"
        }}
      >
        <CustomizedBadges />
        {/* <ShoppingCartIcon style={{ color: "rgba(0, 0, 0, 0.54" }} /> */}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          <div>
            <ButtonComponent text="Remove All" click ={() => removeAll()} />
          </div>
          {allCards.map(
            (i: any) => (
              <div style={{ borderBottom: "1px solid gray", display:'flex' }}>
                <div style ={{paddingRight: '20px'}}>
                  <IndeterminateCheckBoxIcon onClick={() =>remove(i._id)} />
                </div>
                <div>
                  <div>{i.nameBook}</div>
                  {/* <div>{i.description}</div> */}
                  <div>{i.cost}$</div>
                </div>
              </div>
            )
          )}
          <div>
            <p style={{ fontWeight: 600 }}>Total:{sumCosts}$</p>
          </div>
        </Typography>
      </Popover>
    </div>
  );
};
const mapStateToProps = function(state: RootState) {
  return {
    card: state.cardPage.card,
    allCards: state.cardPage.allCards
  };
};

export default connect(
  mapStateToProps,
  {removeCard}
)(SimplePopover);
