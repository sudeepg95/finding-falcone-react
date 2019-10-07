import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ItemComponent from '../Item/ItemComponent';
import { OutcomeActions, VehicleActions } from '../../Store/Actions';

const mapStateToProps = state => ({
  vehicle: state.vehicle,
  outcome: state.outcome
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...VehicleActions, ...OutcomeActions }, dispatch)
});

class SelectVehiclesComponent extends React.Component {
  constructor(props) {
    super(props);
    const {
      actions,
      outcome: { selectedPlanets },
      history
    } = props;
    if (selectedPlanets.length !== 4) {
      history.push('/solve/select-planets');
    } else {
      actions.fetchVehiclesData();
    }
  }

  selectVehicle(vehicle, planet) {
    const { actions } = this.props;
    actions.selectVehicle(vehicle, planet);
  }

  findFalcone() {
    const { actions, history } = this.props;
    actions
      .fetchToken()
      .then(() => actions.findFalcone())
      .then(() => history.push('/solve/outcome'));
  }

  render() {
    const {
      outcome: { totalTime, selectedPlanets, selectedVehicles, error: outcomeError },
      vehicle: { vehicles: vehiclesList, error: vehicleError }
    } = this.props;
    const expeditionDOMMap = selectedPlanets.map((planet, index) => (
      <div className="expedition" key={`expedition-${index}`}>
        <ItemComponent type="planets" item={planet} key={`planet-${index}`} />
        <ItemComponent
          type="vehicles"
          item={planet}
          key={`vehicles-${index}`}
          vehicles={vehiclesList}
          selectedVehicles={selectedVehicles}
          selectItem={vehicle => this.selectVehicle(vehicle, planet)}
        />
      </div>
    ));
    return (
      <>
        <div className="preface-text noselect">
          <h3>Assign vehicles to the planets for the expeditions:</h3>
          <p>Total time to complete all expeditions: {totalTime}</p>
        </div>
        <div className="items-box items-box-alt noselect">
          {selectedPlanets.length > 0 ? expeditionDOMMap : 'Could not load list of vehicles!'}
        </div>
        {Object.values(selectedVehicles).length === 4 && (
          <div className="buttons-box">
            <button type="button" onClick={() => this.findFalcone()}>
              Send expeditions!
            </button>
          </div>
        )}
        {vehicleError.length > 0 && (
          <div className="error-box">
            <p>{vehicleError}</p>
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
  )(SelectVehiclesComponent)
);
