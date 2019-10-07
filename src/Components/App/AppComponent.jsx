import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RouteSwitcher from '../../Router/RouteSwitcher';
import Routes from '../../Router/Routes';
import { PlanetActions, VehicleActions, OutcomeActions } from '../../Store/Actions';
import './AppComponent.scss';

const LoaderComponent = React.lazy(() => import('../Loader/LoaderComponent'));
const WrapperComponent = React.lazy(() => import('../Wrapper/WrapperComponent'));
const HeaderComponent = React.lazy(() => import('../Header/HeaderComponent'));
const FooterComponent = React.lazy(() => import('../Footer/FooterComponent'));

const mapStateToProps = state => ({
  planet: state.planet,
  vehicle: state.vehicle,
  outcome: state.outcome
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...PlanetActions, ...VehicleActions, ...OutcomeActions }, dispatch)
});

class AppComponent extends React.PureComponent {
  render() {
    const {
      planet: { loading: planetLoading },
      vehicle: { loading: vehicleLoading },
      outcome: { loading: outcomeLoading }
    } = this.props;
    const loading = planetLoading || vehicleLoading || outcomeLoading;
    const appComponentClassList = ['app'];
    if (loading) appComponentClassList.push('loader-active');
    return (
      <>
        <React.Suspense fallback={<div>Loading...</div>}>
          <div className={appComponentClassList.join(' ')}>
            <HeaderComponent />
            <WrapperComponent>
              <RouteSwitcher routes={Routes} />
            </WrapperComponent>
            <FooterComponent />
          </div>
          <LoaderComponent show={loading} />
        </React.Suspense>
      </>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppComponent)
);
