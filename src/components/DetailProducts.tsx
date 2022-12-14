import { Product } from '@/graphql/products';
import React from 'react';
import { Link } from 'react-router-dom';

const DetailProducts = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/DetailInform/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__img" src={imageUrl} />
      </Link>
      <button className="product-item__add-cart">담기</button>
    </li>
  );
};

export default DetailProducts;
