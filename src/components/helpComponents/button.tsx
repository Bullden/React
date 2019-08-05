import React from 'react';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import purple from '@material-ui/core/colors/purple';
import { textAlign } from '@material-ui/system';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export interface ButtonInterface {
  text : string;
  click : any;
}

export default function ButtonComponent(rest: any) {
  const classes = useStyles(purple);
  const { text, click } = rest
  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.button} onClick={click}>
        {text}
      </ColorButton>
    </div>
  );
}