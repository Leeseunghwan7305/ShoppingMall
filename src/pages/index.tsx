import { getAllProduct } from '@/api/api';
import React, { useEffect } from 'react';
const Product = () => {
  useEffect(() => {
    console.log(getAllProduct());
  }, []);
  return <div>메인페이지</div>;
};

export default Product;
