import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import './Components/Main/Main.css';

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