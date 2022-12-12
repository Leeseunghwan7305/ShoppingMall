import React from 'react';
import Cart from './components/cart';
import DetailInform from './pages/products/DetailInform';
import Layout from './__layout';

const Main = React.lazy(() => import('./pages/index'));
const ProductMain = React.lazy(() => import('./pages/products/index'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/products', element: <ProductMain />, index: true },
      { path: '/DetailInform/:id', element: <DetailInform />, index: true },
      { path: '/cart', element: <Cart />, index: true },
    ],
  },
];

export const pages = [{ route: '/' }];
