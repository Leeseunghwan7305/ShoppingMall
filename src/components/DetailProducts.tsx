import { Product } from '@/graphql/products';
import React from 'react';
import { Link } from 'react-router-dom';
import { cartItemSelector } from './recoils/cart';
import { useRecoilValue, useRecoilState } from 'recoil';
const DetailProducts = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt,
}: Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));

  const addToCart = () => {
    setCartAmount((cartAmount || 0) + 1);
  };
  return (
    <li className="product-item">
      <Link to={`/DetailInform/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__img" src={imageUrl} />
      </Link>
      <button onClick={addToCart} className="product-item__add-cart">
        담기
      </button>
      <span>{cartAmount ? cartAmount : 0}</span>
    </li>
  );
};

export default DetailProducts;
