import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homePage';

function App() {
  return (
    <div>
      <Router>
        <Route path={"/"} component={HomePage}/>
      </Router>
    </div>
  );
}

export default App;
