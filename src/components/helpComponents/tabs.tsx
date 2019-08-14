import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Link, Router } from "react-router-dom";
import { adminPage } from '@redux/adminPage/reducer';
import { LoginProps } from '@components/login/loginComponent';
import { environment } from '../../enviroment';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    flexGrow: 0,
  },
});

  const CenteredTabs: React.FC = () => {

  const classes = useStyles({});
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);

  }
  const admin = environment.admin
  const local: any = localStorage.getItem("user");
  const fakeUser = {id:99,name:'fakeUser',password:'fakeUser',email:'fakeUser' };

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
        {
           JSON.parse(local).name === fakeUser.name  && JSON.parse(local).email === fakeUser.email && JSON.parse(local).password === fakeUser.password
          ?
        <Tab label="Registration" value='/registration' component={Link} to="/registration" /> 
          : null  

        }
        
        <Tab label="Login" value='/login' component={Link} to="/login" />
        { console.log(JSON.parse(local))}
        {console.log(fakeUser)}
        {
           JSON.parse(local).roleId === 0
          ?
          <Tab label="Admin Page" value="/adminPage" component={Link} to="/adminPage"/>
          : console.log('sdfsdf')
        }        
      </Tabs>
    </Paper>
  );
}


const mapStateToProps = function(state:any) {
  return {
    local: state.local,
    fakeUser: state.fakeUser
  }
}

export default connect(mapStateToProps)(CenteredTabs);

//  export default CenteredTabs


// import React, { PureComponent, Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import { Route, Link, Router } from "react-router-dom";
// import { adminPage } from "@redux/adminPage/reducer";
// import { LoginProps } from "@components/login/loginComponent";
// import { environment } from "../../enviroment";

// // const useStyles = makeStyles({
// //   root: {
// //     flexGrow: 0
// //   }
// // });


// interface CenteredTabsProps {

// }

// interface CenteredTabsState {
//   local: any;
//   fakeUser: any;
// }

// // const classes = useStyles(makeStyles);
// const [value, setValue] = React.useState(0);


// export default class CenteredTabs extends Component<
//   CenteredTabsProps,
//   CenteredTabsState
// > {
//   constructor(props: CenteredTabsProps) {
//     super(props);
//     this.state = {
//       local: {},
//       fakeUser: {}
//     };
//   }

//   header = () => {
//     let localSt = localStorage.getItem("user");
//     let SomefakeUser = {
//       id: 99,
//       name: "fakeUser",
//       password: "fakeUser"
//     };
//     this.setState({
//       local: localSt,
//       fakeUser: SomefakeUser
//     });
//   };

//   handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   componentDidMount() {
//     this.header();
//   }
//   // this.forceUpdate
//   render() {
//     const { local } = this.state;
//     const { fakeUser } = this.state;
//     return (
//       // <Paper className={classes.root}>
//       <Paper>
//         <Tabs
//           value={value}
//           onChange={this.handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           centered
//         >
//           <Tab label="Home" value="/" component={Link} to="/" />
//           {JSON.parse(local).name === fakeUser.name &&
//           JSON.parse(local).email === fakeUser.email &&
//           JSON.parse(local).password === fakeUser.password ? (
//             <Tab
//               label="Registration"
//               value="/registration"
//               component={Link}
//               to="/registration"
//             />
//           ) : null}
//           <Tab label="Login" value="/login" component={Link} to="/login" />
//           {JSON.parse(local).roleId === 0 ? (
//             <Tab
//               label="Admin Page"
//               value="/adminPage"
//               component={Link}
//               to="/adminPage"
//             />
//           ) : (
//             console.log("sdfsdf")
//           )}
//           |
//         </Tabs>
//       </Paper>
//     );
//   }
// }