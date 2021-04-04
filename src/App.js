import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './Components/Nav/Nav.css';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/Projects' component={Projects} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;