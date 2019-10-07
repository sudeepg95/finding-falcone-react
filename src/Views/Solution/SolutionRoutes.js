import React from 'react';

const SelectPlanetsComponent = React.lazy(() =>
  import('../../Components/SelectPlanets/SelectPlanetsComponent')
);
const SelectVehiclesComponent = React.lazy(() =>
  import('../../Components/SelectVehicles/SelectVehiclesComponent')
);
const OutcomeComponent = React.lazy(() => import('../../Components/Outcome/OutcomeComponent'));
const NotFoundComponent = React.lazy(() => import('../../Components/NotFound/NotFoundComponent'));

const SolutionRoutes = [
  {
    path: '/solve(/select-planets)?',
    exact: true,
    component: SelectPlanetsComponent
  },
  {
    path: '/solve/select-vehicles',
    component: SelectVehiclesComponent
  },
  {
    path: '/solve/outcome',
    component: OutcomeComponent
  },
  {
    path: '/solve/*',
    component: NotFoundComponent
  }
];

export default SolutionRoutes;
