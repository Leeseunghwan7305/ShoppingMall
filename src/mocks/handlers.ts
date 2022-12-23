import { UPDATE_CART } from './../graphql/cart';
import { QueryKeys } from '@/queryClient';
import { graphql, rest } from 'msw';
import { v4 as uuid } from 'uuid';
import GET_PRODUCTS, { GET_PRODUCT } from '@/graphql/products';
import { GET_CART, ADD_CART } from '@/graphql/cart';

const mock_products = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    // id: uuid(),
    id: i + 1 + '',
    imageUrl: `https://placeimg.com/200/150/${i + 1}`,
    price: 50000,
    title: `임시상품${i + 1}`,
    description: `임시상세내용${i + 1}`,
    createdAt: new Date(1645735501883 + i * 1000 * 60 * 60 * 10).toString(),
  })))();
export type CartType = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  amount: number;
};

//map으로 하면 서버에 못보내니까 객체로 변경
let cartData: { [key: string]: any } = {};

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    //GET_PRODUCTS 가 graphQl 타입인거같다
    return res(
      ctx.data({
        products: mock_products,
      }),
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mock_products.find((item) => {
      return item.id === req.variables.id;
    });

    if (found) return res(ctx.data(found));
    else {
      return res();
    }
  }),

  graphql.query(GET_CART, (req, res, ctx) => {
    console.log(cartData);
    return res(ctx.data(cartData));
  }),

  graphql.mutation(ADD_CART, (req, res, ctx) => {
    const newData = { ...cartData };
    const id = req.variables.id;

    //cart에 담겨져있다면?
    if (newData[id]) {
      newData[id] = {
        ...newData[id],
        amount: (newData[id].amount || 0) + 1,
      };
      //담겨져 있지 않다면?
    } else {
      const found = mock_products.find((item) => item.id === req.variables.id);
      if (found) {
        newData[id] = {
          ...found,
          amount: 1,
        };
      }
    }
    cartData = newData;
    return res(ctx.data(newData));
  }),

  graphql.mutation(UPDATE_CART, (req, res, ctx) => {
    const newData = { ...cartData };
    const { id, amount } = req.variables;

    //cart에 담겨져있다면?
    if (!newData[id]) {
      throw new Error('없는 데이터입니다');
    }
    newData[id] = {
      ...newData[id],
      amount,
    };
    //담겨져 있지 않다면?

    cartData = newData;
    return res(ctx.data(newData));
  }),
];
