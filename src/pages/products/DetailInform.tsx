import GET_PRODUCTS, { GET_PRODUCT, Product } from '@/graphql/products';
import { graphqlFetcher, QueryKeys } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailInform = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT, { id }),
  );
  if (!data) return null;

  const { title, imageUrl, description } = data;
  console.log(data);
  return (
    <div>
      <h1>상품상세</h1>
      <li className="product-detail">
        <p className="product-detail__title">{title}</p>

        <img className="product-detail__img" src={imageUrl} />
        <p className="product-detail__description">{description}</p>
      </li>
    </div>
  );
};

export default DetailInform;
