import React from 'react';

import { SolutionView } from '../Views/Solution';

const ProblemComponent = React.lazy(() => import('../Components/Problem/ProblemComponent'));
const HelpComponent = React.lazy(() => import('../Components/Help/HelpComponent'));
const NotFoundComponent = React.lazy(() => import('../Components/NotFound/NotFoundComponent'));

const Routes = [
  {
    path: '/',
    exact: true,
    component: ProblemComponent
  },
  {
    path: '/solve',
    component: SolutionView
  },
  {
    path: '/help',
    component: HelpComponent
  },
  {
    path: '*',
    component: NotFoundComponent
  }
];

export default Routes;
