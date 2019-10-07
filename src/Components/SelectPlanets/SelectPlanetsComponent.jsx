import React from 'react';
import { Link } from 'react-router-dom';

import ItemComponent from '../Item/ItemComponent';
import APIService from '../../Services/APIService';

class SelectPlanetsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      selectedPlanets: [],
      error: ''
    };
    this.invokePlanetsAPI();
  }

  planetIndexIfExists(planet) {
    const { selectedPlanets } = this.state;
    return selectedPlanets.indexOf(planet.name);
  }

  selectPlanet(planet) {
    const { selectedPlanets } = this.state;
    const newSelectedPlanets = [...selectedPlanets];
    const planetIndexIfExists = this.planetIndexIfExists(planet);
    if (planetIndexIfExists > -1) {
      newSelectedPlanets.splice(planetIndexIfExists, 1);
      this.setState({
        selectedPlanets: [...newSelectedPlanets]
      });
    } else if (selectedPlanets.length < 4) {
      this.setState({
        selectedPlanets: [...selectedPlanets, planet.name]
      });
    }
  }

  invokePlanetsAPI() {
    APIService.fetchPlanets()
      .then(result => {
        this.setState({
          planets: [...result]
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  render() {
    const { planets, selectedPlanets, error } = this.state;
    const planetsDOMMap = planets.map((planet, index) => (
      <ItemComponent
        type="planets"
        item={planet}
        key={index}
        isSelected={this.planetIndexIfExists(planet) > -1}
        selectItem={() => this.selectPlanet(planet)}
      />
    ));
    return (
      <>
        <div className="preface-text noselect">
          <h3>Select planets you want to search in:</h3>
          <p>You can only choose 4 planets</p>
        </div>
        <div className="items-box noselect">
          {planets.length > 0 ? planetsDOMMap : 'Could not load list of planets!'}
        </div>
        {selectedPlanets.length === 4 && (
          <div className="buttons-box">
            <Link to="/solve/select-vehicles">Select Vehicles to send to these planets</Link>
          </div>
        )}
        {error.length > 0 && (
          <div className="error-box">
            <p>{error}</p>
          </div>
        )}
      </>
    );
  }
}

export default SelectPlanetsComponent;
