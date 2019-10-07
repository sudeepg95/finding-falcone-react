import React from 'react';

import RouteSwitcher from '../../Router/RouteSwitcher';
import SolutionRoutes from './SolutionRoutes';

const SolutionView = () => {
  return (
    <div className="box">
      <div className="title-box">Solution</div>
      <div className="box-content">
        <RouteSwitcher routes={SolutionRoutes} />
      </div>
    </div>
  );
};

export default SolutionView;
