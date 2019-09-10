import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { RootState } from '@redux/rootReducer';
import { connect } from 'react-redux';

const StyledBadge1 = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);

 function CustomizedBadges(props:any) {

  const allCards = props.allCards 
  console.log('1111',allCards.length)
  return (
    <Box display="flex">
      <Box m={1}>
        <IconButton aria-label="cart">
          <StyledBadge1 badgeContent={allCards.length} color="primary">
            <ShoppingCartIcon />
          </StyledBadge1>
        </IconButton>
      </Box>
    </Box>
  );
}

const mapStateToProps = function(state: RootState) {
    return {
        allCards: state.cardPage.allCards
    };
  };
  
  export default connect(mapStateToProps)(CustomizedBadges);