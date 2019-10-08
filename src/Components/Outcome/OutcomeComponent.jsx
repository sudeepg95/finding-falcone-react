import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { OutcomeActions } from '../../Store/Actions';

const mapStateToProps = state => ({
  outcome: state.outcome
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...OutcomeActions }, dispatch)
});

class OutcomeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      outcome: { aftermath, totalTime },
      history
    } = props;
    if (!aftermath || totalTime === 0.0) {
      history.push('/solve/select-planets');
    }
  }

  startOver() {
    const { actions, history } = this.props;
    actions.clearOutcome();
    history.push('/');
  }

  render() {
    const {
      outcome: {
        aftermath: { status, planet_name: planetName },
        totalTime,
        error: outcomeError
      }
    } = this.props;
    return (
      <>
        <div className="image-box">
          <img src={`${process.env.PUBLIC_URL}/space-badge.png`} alt="space-badge" />
        </div>
        {status === 'success' && (
          <div className="text-box">
            <h3>Congratulations!</h3>
            <p className="description">
              You were able to find Falcone. King Shan is mightily pleased.
            </p>
            <p className="description">Time taken: {totalTime}</p>
            <p className="description">Planet found: {planetName}</p>
          </div>
        )}
        {status !== 'success' && (
          <div className="text-box">
            <h3>You failed!</h3>
            <p className="description">
              You were not able to find Falcone. King Shan is going to execute you.
            </p>
            <p className="description">Time wasted: {totalTime}</p>
          </div>
        )}
        <div className="buttons-box">
          <button type="button" onClick={() => this.startOver()}>
            Start over
          </button>
        </div>
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
  )(OutcomeComponent)
);
