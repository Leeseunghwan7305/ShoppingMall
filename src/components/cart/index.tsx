import { CartType } from '@/mocks/handlers';
import React from 'react';
import CartItem from './item';

const CartList = ({ items }: { items: CartType[] }) => {
  return (
    <ul className="cart">
      {items?.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default CartList;
