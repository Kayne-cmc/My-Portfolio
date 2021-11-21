import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import './Components/Main/Main.css';

function App() {

  const [test, setIndex] = useState(0);

  return (
    <div className="App">
      <Router>
        <Route exact path='/'><Main index={test} setIndex={setIndex} /></Route>
        <Route path='/Projects'><Projects index={test} setIndex={setIndex}/></Route>
      </Router>
    </div>
  )
}

export default App;