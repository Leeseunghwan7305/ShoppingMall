import { QueryKeys } from '@/queryClient';
// graphql을 이용하려면, graphql을 꺼내오면 된다.
// 현재 여기서는 restAPI로 실습하기 위해 rest를 꺼내왔다.
import { graphql, rest } from 'msw';
import { v4 as uuid } from 'uuid';
import GET_PRODUCTS, { GET_PRODUCT } from '@/graphql/products';

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://placeimg.com/200/150/${i + 1}`,
  price: 5000,
  title: `임시상품${i + 1}`,
  description: `임시상세내용${i + 1}`,
  createAt: new Date(1234567890 + i * 1000 * 60).toString(),
}));

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
    return res(ctx.data(mock_products[0]));
  }),
];
