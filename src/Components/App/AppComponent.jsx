import React from 'react';

import RouteSwitcher from '../../Router/RouteSwitcher';
import Routes from '../../Router/Routes';
import LoaderService from '../../Services/LoaderService';

const LoaderComponent = React.lazy(() => import('../Loader/LoaderComponent'));
const WrapperComponent = React.lazy(() => import('../Wrapper/WrapperComponent'));
const HeaderComponent = React.lazy(() => import('../Header/HeaderComponent'));
const FooterComponent = React.lazy(() => import('../Footer/FooterComponent'));

class AppComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    LoaderService.loaderObservable().subscribe(currentStatus => {
      this.setState({
        loading: !currentStatus ? false : currentStatus
      });
    });
  }

  render() {
    const { loading } = this.state;
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

export default AppComponent;
