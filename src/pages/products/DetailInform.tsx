import { fetcher, QueryKeys } from '@/queryClient';
import { Product } from '@/type';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailInform = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({ method: 'GET', path: `/products/${id}` }),
  );
  if (!data) return null;

  const { category, title, image, description, price, rating } = data;
  return (
    <div>
      <h1>상품상세</h1>
      <li className="product-detail">
        <p className="product-detail__title">{title}</p>

        <img className="product-detail__img" src={image} />
        <p className="product-detail__description">{description}</p>
        <p>{rating.rate}</p>
        <p>{rating.count}</p>
      </li>
    </div>
  );
};

export default DetailInform;
