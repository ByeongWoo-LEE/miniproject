import React from 'react';
import './css/App.css';
import Nav from './components/Nav';
import Champions from './components/Champions'
import Main from './components/Main'

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Nav />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/champions' component={Champions}/>
          <Route component={() => <h2>Not Found!</h2>}/>
        </Switch>
    </div>
  );
}
export default App;