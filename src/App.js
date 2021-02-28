import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './Components/Nav/Nav.css';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          {Main}
        </Route>
        <Route path='/Projects'>
          {Projects}
        </Route>
      </Switch>
    </div>
  )
}

export default App;