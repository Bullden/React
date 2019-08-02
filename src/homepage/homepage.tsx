import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppRouter from '../authorization/authorization'
import './homepage.css'

const HomePage:  React.FC = () => {
    return (
        
        <Router>
           
            <div>
                <ul>
                    <li><Link to ='/authorization'>Authorization</Link></li>
                    <li><Link to ='/homepage'>Homepage</Link></li>
                </ul>
            </div>
            
        <Route exact path="/authorization" component={AppRouter} />
        <Route path="/homepage" exact component={Homepage} /> 
        </Router>
    )
}
function Homepage () {
    return(
        <div className='h2'>
            <h2>Homepage</h2>
        </div>
    )
}

export default HomePage