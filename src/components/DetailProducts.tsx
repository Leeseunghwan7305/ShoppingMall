import { ADD_CART } from '@/graphql/cart';
import { Product } from '@/graphql/products';
import { graphqlFetcher, QueryKeys } from '@/queryClient';
import { useMutation } from '@tanstack/react-query';
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
  //selector Family이기떄문에 id라는 매개변수가 들어감
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id }),
  );
  return (
    <li className="product-item">
      <Link to={`/DetailInform/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__img" src={imageUrl} />
      </Link>
      <button className="product-item__add-cart" onClick={() => addCart(id)}>
        담기
      </button>
    </li>
  );
};

export default DetailProducts;
