import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { RootState } from "@redux/rootReducer";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import ButtonComponent from "./button";
import { RemoveCard } from "@components/home/typesCards";
import {removeCard} from "../home/actionCards"
import CustomizedBadges from "./badge";

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
  const allCards = props.allCards
  const sumBook = allCards.map(function(i: any) {
    return i.cost * i.quantity;
  });
  const totalSum = sumBook.reduce(function(sum:any, current:any) {
    return sum + current;
  }, 0);
  const allCosts = allCards.map(function(costs: any) {
    return +costs.cost;
  });
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
      item.quantity --
      if(item.quantity <1) {
        allCards.splice(idx,1)  
      }
    })
    const { removeCard } = props
    removeCard(allCards)
  }
  function removeAll() {
    allCards.forEach((item:any,idx:any) => {
      if(item._id)
      allCards.splice(idx,100)
    })
    const { removeCard } = props
    removeCard(allCards)
  } 
function handleClose() {
    setAnchorEl(null);
}
const count = props.allCards.map(function(e:any){
  return e.quantity
})
const totalCount = count.reduce(function(sum:any, current:any) {
  return sum + current;
}, 0);
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
        <CustomizedBadges totalCount = {totalCount} />
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
                  <div>{i.cost}$</div>
                </div>
                <div style ={{padding:'10px', marginLeft:'30px'}}>
                  <div>{i.quantity}</div>
                </div>
              </div>
            )
          )}
          <div>
            <p style={{ fontWeight: 600 }}>Total:{totalSum}$</p>
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
