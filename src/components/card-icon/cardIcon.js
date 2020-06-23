import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cardIcon.scss';

const CardIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

export default CardIcon;
