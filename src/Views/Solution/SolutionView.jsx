import React from 'react';

import RouteSwitcher from '../../Router/RouteSwitcher';
import SolutionRoutes from './SolutionRoutes';

const SolutionView = () => {
  const labels = [
    ['/solve/select-planets', 'Select Planets'],
    ['/solve/select-vehicles', 'Select Vehicles'],
    ['/solve/outcome', 'Outcome']
  ];
  let titleName = 'Solve';
  labels.forEach(([urlString, actualTitle]) => {
    if (window.location.pathname.includes(urlString)) titleName = actualTitle;
  });
  return (
    <div className="box">
      <div className="title-box">{titleName}</div>
      <div className="box-content">
        <RouteSwitcher routes={SolutionRoutes} />
      </div>
    </div>
  );
};

export default SolutionView;
