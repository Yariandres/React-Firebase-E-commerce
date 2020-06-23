import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'; 

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapStateToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapStateToProps)(CartIcon);
