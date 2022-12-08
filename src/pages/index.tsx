import { getAllProduct } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
const Product = () => {
  const { data } = useQuery(['shop'], getAllProduct);
  console.log(data);
  return <div>hi</div>;
};

export default Product;
