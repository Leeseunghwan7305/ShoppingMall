import { ADD_CART, UPDATE_CART } from '@/graphql/cart';
import { CartType } from '@/mocks/handlers';
import { getClient, graphqlFetcher, QueryKeys } from '@/queryClient';
import { QueryClient, useMutation } from '@tanstack/react-query';
import React, { SyntheticEvent } from 'react';

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    //updateCart가 성공했을떄 invalidateQueries요청
    updateCart(
      { id, amount },
      {
        onSuccess: () => queryClient.invalidateQueries([QueryKeys.CART]),
      },
    );
  };

  return (
    <li className="cart-item">
      <img src={imageUrl} />
      <p className="cart-item__price">{price}</p>
      <p className="cart-item__title">{title}</p>
      <input
        onChange={handleUpdateAmount}
        type="number"
        className="cart-item__amount"
        value={amount}
      ></input>
    </li>
  );
};

export default CartItem;
