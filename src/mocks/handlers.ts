import { QueryKeys } from '@/queryClient';
// graphql을 이용하려면, graphql을 꺼내오면 된다.
// 현재 여기서는 restAPI로 실습하기 위해 rest를 꺼내왔다.
import { graphql, rest } from 'msw';
import { v4 as uuid } from 'uuid';
import GET_PRODUCTS, { GET_PRODUCT } from '@/graphql/products';
import { GET_CART, ADD_CART } from '@/graphql/cart';

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1 + '',
  imageUrl: `https://placeimg.com/200/150/${i + 1}`,
  price: 5000,
  title: `임시상품${i + 1}`,
  description: `임시상세내용${i + 1}`,
  createAt: new Date(1234567890 + i * 1000 * 60).toString(),
}));

//map으로 하면 서버에 못보내니까 객체로 변경
const cartData = (() => ({}))();

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
    return res();
  }),

  graphql.mutation(ADD_CART, (req, res, ctx) => {
    console.log(req.variables);
    const id = req.variables.id;
    return res(ctx.data({}));
  }),
];
