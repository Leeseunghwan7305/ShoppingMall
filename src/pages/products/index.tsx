import GET_PRODUCTS, { Products } from '@/graphql/products';
import { graphqlFetcher, QueryKeys } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DetailProducts from '../../components/DetailProducts';

const ProductList = () => {
  const { data } = useQuery<Products>([QueryKeys.PRODUCTS], () =>
    graphqlFetcher(GET_PRODUCTS),
  );
  console.log(data);
  
  return (
    <div>
      <h1>상품 목록</h1>
      <ul className="products">
        {data?.products.map((item) => {
          return <DetailProducts {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
