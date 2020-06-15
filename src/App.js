import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homePage';

const Hats = () => {
  return (
    <h1>HATS PAGE</h1>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Route exact path={"/"} component={ HomePage }/>
        <Route path={"/hats"} component={ Hats }/>
      </Router>
    </div>
  );
}

export default App;
