import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shop/shopPage';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import Header from './components/header/header';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {

    return (
      <div>    
        <Router>
          <Header currentUser={this.state.currentUser}/>
  
          <Switch>   
            <Route exact path={"/"} component={ HomePage }/>
            <Route path={"/shop"} component={ ShopPage }/>
            <Route path={"/signin"} component={ SignInSignUpPage }/>
          </Switch>
  
        </Router>
      </div>
    );

  }
  
}

export default App;
