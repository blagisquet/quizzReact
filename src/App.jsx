import React from 'react';
import Menu from './Components/Menu/Menu';
import Qi from './Components/Qi/Qi';
import Sports from './Components/Sports/Sports';
import './App.scss';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Menu />
      <Route path="/sports" exact component={Sports} />
      <Route path="/qi" exact component={Qi} />
    </div>
    );
  }
  
  export default App;
