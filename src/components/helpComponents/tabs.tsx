import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Link, Router } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 0,
  },
});

export default function CenteredTabs() {
  const classes = useStyles({});
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" value='/' component={Link} to="/" />
        <Tab label="Registration" value='/registration' component={Link} to="/registration" />
        <Tab label="Login" value='/login' component={Link} to="/login" />
      </Tabs>
    </Paper>
  );
}