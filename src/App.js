import React from 'react';
import Idgenerator from './components/Idgenerator';
import Home from './components/Home'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>

     <Switch>
       
     <Route exact path="/">
        <Home />
      </Route>
      
      <Route path="/amigos">
        <div className="App">
        <Idgenerator/>
        </div>
      </Route>
     </Switch>
    </Router>
  );
}

export default App;
