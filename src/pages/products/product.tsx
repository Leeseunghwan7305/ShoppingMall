import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  return <div>상세페이지{id}</div>;
};

export default ProductDetail;
