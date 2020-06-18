import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shop/shopPage';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';

import Header from './components/header/header';


function App() {
  return (
    <div>    
      <Router>
        <Header/>

        <Switch>   
          <Route exact path={"/"} component={ HomePage }/>
          <Route path={"/shop"} component={ ShopPage }/>
          <Route path={"/signin"} component={ SignInSignUpPage }/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
