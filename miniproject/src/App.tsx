import { useState } from 'react';
import './css/App.css';
import Champions from './components/Champions'
import Main from './components/Main'

import Header from "./components/Header.js";
import SearchbarContainer from "./components/SearchbarContainer.js";

import { Button } from '@mui/material';

function App() {
  const [ show, setShow] = useState(false);

  return (
    <div className="App">
      <Header onDrawerToggle={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <Main />
      <SearchbarContainer />
      <Button onClick={() => setShow(!show)}>검색</Button>
      { show? <Champions/> : null}
      {console.log(show)}
    </div>
  );
}
export default App;