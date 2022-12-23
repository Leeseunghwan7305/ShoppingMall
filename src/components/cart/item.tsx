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
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries([QueryKeys.CART]);
        const prevCart = queryClient.getQueriesData<{
          [key: string]: CartType;
        }>([QueryKeys.CART]);
        if (!prevCart?.[Number(id)]) return prevCart;

        const newCart = {
          ...(prevCart || {}),
          [id]: { ...prevCart[Number(id)], amount },
        };
        queryClient.setQueriesData([QueryKeys.CART], newCart);
        return prevCart;
      },
      onSuccess: (newValue) => {
        const prevCart = queryClient.getQueriesData<{
          [key: string]: CartType;
        }>([QueryKeys.CART]);

        const newCart = {
          ...(prevCart || {}),
          [id]: newValue,
        };
        queryClient.setQueriesData([QueryKeys.CART], newCart);
      },
    },
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    //updateCart가 성공했을떄 invalidateQueries요청
    updateCart({ id, amount });
  };

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={imageUrl} />
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
