import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import ItemComponent from '../Item/ItemComponent';
import { PlanetActions, OutcomeActions } from '../../Store/Actions';

const mapStateToProps = state => ({
  planet: state.planet,
  outcome: state.outcome
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...PlanetActions, ...OutcomeActions }, dispatch)
});

class SelectPlanetsComponent extends React.Component {
  constructor(props) {
    super(props);
    const { actions } = props;
    actions.fetchPlanetsData();
  }

  planetIndexIfExists(planet) {
    const {
      outcome: { selectedPlanets }
    } = this.props;
    return selectedPlanets.findIndex(item => item.name === planet.name);
  }

  selectPlanet(planet) {
    const { actions } = this.props;
    actions.selectPlanet(planet);
  }

  render() {
    const {
      planet: { planets, error: planetError },
      outcome: { selectedPlanets, error: outcomeError }
    } = this.props;
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
        {planetError.length > 0 && (
          <div className="error-box">
            <p>{planetError}</p>
          </div>
        )}
        {outcomeError.length > 0 && (
          <div className="error-box">
            <p>{outcomeError}</p>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectPlanetsComponent)
);
