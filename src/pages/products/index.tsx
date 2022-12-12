import { fetcher, QueryKeys } from '@/queryClient';
import { Product } from '@/type';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DetailProducts from '../../components/DetailProducts';

const ProductList = () => {
  const { data } = useQuery<Product[]>([QueryKeys.PRODUCTS], () =>
    fetcher({
      method: 'GET',
      path: '/products',
    }),
  );
  console.log(data);
  return (
    <div>
      <h1>상품 목록</h1>
      <ul className="products">
        {data?.map((item) => {
          return <DetailProducts {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
