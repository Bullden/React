import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Verification from './signIn/signIn'
import HomePage from "../homepage/homepage";
import './authorization.css'

const AppRouter:  React.FC = () => {
    return (
        
        <Router>
           
            <div>
            
            
                {/* <div>
                    <Link to ='/homepage'>Homepage</Link>
                </div>  */}
                {/* <div>
                    <Link to ='/authorization/'>authorization</Link>
                </div> */}
                {/* <div>
                    <Link to ='/email/'>Email</Link>
                </div>        */} 
            </div>
        
        <Route path="/homepage/" component={HomePage} /> 
        <Route exact path="/authorization" component={Authorization} />
        <Route path="/authorization" exact component={Verification} /> 
        </Router>
    )
}
function Authorization () {
    return(
        <div className='h2'>
            <h2>Authorization</h2>
        </div>
    )
}

export default AppRouter