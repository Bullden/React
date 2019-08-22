import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from 'react-redux';
import SimpleCard from '@components/home/homeCards';
import { RootState } from '@redux/rootReducer';
import {doCard} from '../home/actionCards'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);

export  function SimplePopover(props:any) {
 
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // const card = props.cardPage.card

  return (
    <div style= {{paddingTop:"4px"}}>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} style = {{
          boxShadow: 'none',background:'none'
      }}>
        <ShoppingCartIcon style={{ color: "rgba(0, 0, 0, 0.54" }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>FFFFFFFFFFFFFFF</Typography>
      </Popover>
    </div>
  );
}
const mapStateToProps=function(state:RootState) {
  return{
    // nameBook: state.adminBookPage.book.nameBook,
    // description: state.adminBookPage.book.description,
    // cost: state.adminBookPage.cost
    card: state.cardPage.card,
    allCards: state.cardPage.allCards
  }
}

export default connect(mapStateToProps, {doCard})(SimplePopover)