import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CardIcon from '../card-icon/cardIcon';
import CartDropdown from '../cart-dropdown/cartDropdown';

import './header.scss';
import { ReactComponent as Logo} from '../../assets/original.svg';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>

      <Link className='option' to='/contact'>
        CONTACT
      </Link>

      {currentUser ? (
        <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}

      <CardIcon/>
      
    </div>

    <CartDropdown/>

  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);