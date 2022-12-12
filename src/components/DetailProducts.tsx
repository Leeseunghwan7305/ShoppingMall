import { Product } from '@/type';
import React from 'react';
import { Link } from 'react-router-dom';

const DetailProducts = ({ id, description, image, rating, title }: Product) => {
  return (
    <li className="product-item">
      <Link to={`/DetailInform/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__img" src={image} />
        <span className="product-item__count">{rating.count}</span>
        <span className="product-item__rating">{rating.rate}</span>
      </Link>
    </li>
  );
};

export default DetailProducts;
