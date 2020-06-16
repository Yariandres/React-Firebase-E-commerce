import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shop/shopPage';

function App() {
  return (
    <div>
      <Router>
        <Route exact path={"/"} component={ HomePage }/>
        <Route path={"/shop"} component={ ShopPage }/>
      </Router>
    </div>
  );
}

export default App;
