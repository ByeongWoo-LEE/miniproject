import React from 'react';
import './css/App.css';
import Nav from './components/Nav';
import Champions from './components/Champions'
import Main from './components/Main'

import Header from "./paging/Header.js";

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Header onDrawerToggle={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>
    
  );
}
export default App;