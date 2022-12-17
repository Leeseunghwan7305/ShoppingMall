import React from 'react';
import DetailInform from './pages/products/DetailInform';
import Layout from './__layout';

const Main = React.lazy(() => import('./pages/index'));
const ProductMain = React.lazy(() => import('./pages/products/index'));
const CartPage = React.lazy(() => import('./pages/cart'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/products', element: <ProductMain />, index: true },
      { path: '/DetailInform/:id', element: <DetailInform />, index: true },
      { path: '/cart', element: <CartPage />, index: true },
    ],
  },
];

export const pages = [{ route: '/' }];
