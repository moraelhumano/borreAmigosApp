import React from 'react';
import Post from './components/Post';
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

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/amigos">
        <div className="App">
        <Post/>
        </div>
      </Route>
    </Router>
  );
}

export default App;
