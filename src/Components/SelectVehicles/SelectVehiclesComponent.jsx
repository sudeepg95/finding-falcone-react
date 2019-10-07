import React from 'react';

import ItemComponent from '../Item/ItemComponent';
import APIService from '../../Services/APIService';

class SelectVehiclesComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      selectedVehicles: [],
      error: ''
    };
    this.invokeVehiclesAPI();
  }

  invokeVehiclesAPI() {
    APIService.fetchVehicles()
      .then(result => {
        this.setState({
          vehicles: [...result]
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  render() {
    return 'This is the Select Vehicles component!';
  }
}

export default SelectVehiclesComponent;
