import React from 'react';
import Post from './components/Post';
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
        <h1>Hola mundo</h1>
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
