import React from 'react';
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
    ],
  },
];

export const pages = [{ route: '/' }];
