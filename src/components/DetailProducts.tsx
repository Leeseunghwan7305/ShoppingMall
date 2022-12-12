import { Product } from '@/type';
import React from 'react';

const DetailProducts = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li>
      <p>{category}</p>
      <p>{title}</p>
      <p>{description}</p>
      <img src={image} />
      <span>{rating.count}</span>
      <span>{rating.rate}</span>
    </li>
  );
};

export default DetailProducts;
