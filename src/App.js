import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


import Header from './component/Header/Header'
import route from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header /> 
        <Link to="/">Dashboard</Link>
        <Link to="/Wizard"></Link>   
        { route }
      </div>
    );
  }
}

export default App;
