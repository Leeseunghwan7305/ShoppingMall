import { UPDATE_CART } from './../graphql/cart';
import { QueryKeys } from '@/queryClient';
import { graphql, rest } from 'msw';
import { v4 as uuid } from 'uuid';
import GET_PRODUCTS, { GET_PRODUCT } from '@/graphql/products';
import { GET_CART, ADD_CART } from '@/graphql/cart';

const mock_products = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: i + '',
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
    const newCartData = { ...cartData };
    const id = req.variables.id;
    const targetProduct = mock_products.find((item) => item.id === id);
    if (!targetProduct) {
      throw new Error('상품이 없습니다.');
    }
    const newItem = {
      ...targetProduct,
      amount: (newCartData[id]?.amount || 0) + 1,
    };
    newCartData[id] = newItem;
    cartData = newCartData;

    return res(ctx.data(newItem));
  }),
  graphql.mutation(UPDATE_CART, (req, res, ctx) => {
    const newData = { ...cartData };
    const { id, amount } = req.variables;
    if (!newData[id]) {
      throw new Error('없는 데이터입니다.');
    }
    const newItem = {
      ...newData[id],
      amount,
    };
    newData[id] = newItem;
    cartData = newData;
    return res(ctx.data(newItem));
  }),
];
