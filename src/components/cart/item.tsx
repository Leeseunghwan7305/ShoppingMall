import { CartType } from '@/mocks/handlers';
import React from 'react';

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => {
  return (
    <li>
      {id} {imageUrl} {price} {title} {amount}
    </li>
  );
};

export default CartItem;
