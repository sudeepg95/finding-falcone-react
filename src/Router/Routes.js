import React from 'react';

const HomeComponent = React.lazy(() => import('../Components/Home/HomeComponent'));
const NotFoundComponent = React.lazy(() => import('../Components/NotFound/NotFoundComponent'));

const Routes = [
  {
    path: '/',
    exact: true,
    component: HomeComponent
  },
  {
    path: '*',
    component: NotFoundComponent
  }
];

export default Routes;
