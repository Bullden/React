import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
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

interface Props {
  totalCount: any
}

function CustomizedBadges(props: Props) {
 const {totalCount} = props
  return (
    <Box display="flex">
      <Box m={1}>
        <IconButton aria-label="cart">
          <StyledBadge1 badgeContent={totalCount} color="primary"  >
            <ShoppingCartIcon />
          </StyledBadge1>
        </IconButton>
      </Box>
    </Box>
  );
}
const mapStateToProps = function(state: RootState) {
    return {
        allCards: state.cardPage.allCards,
        cardLength: state.cardPage.cardLength
    };
  };
  
export default connect(mapStateToProps)(CustomizedBadges);