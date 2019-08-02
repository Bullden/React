import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import AppRouter from './authorization/authorization'
import HomePage from './homepage/homepage';

const App: React.FC = () => {
  
  return (
    <div className="App"> 
      <HomePage></HomePage> 
    </div>
  );
}

export default App;
