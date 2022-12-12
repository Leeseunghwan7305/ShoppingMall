import { Product } from '@/type';
import React from 'react';

const DetailProducts = ({ description, image, rating, title }: Product) => {
  return (
    <li className="product-item">
      <p className="product-item__title">{title}</p>
      <img
        className="product-item__img"
        style={{ width: '100%', height: '150px', objectFit: 'contain' }}
        src={image}
      />
      <span className="product-item__count">{rating.count}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </li>
  );
};

export default DetailProducts;
