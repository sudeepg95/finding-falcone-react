/* eslint-disable no-console */
import { SUCCESS_DEFAULT, FAILURE_DEFAULT } from '../Types';

export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      const { promise, types, ...rest } = action;
      if (!promise) {
        return next(action);
      }
      const [REQUEST, SUCCESS = SUCCESS_DEFAULT, FAILURE = FAILURE_DEFAULT] = types;
      next({ ...rest, type: REQUEST });

      const actionPromise = promise(client, { ...getState() });
      actionPromise
        .then(
          result => {
            if (result && result.data && result.status && result.status === 200) {
              next({ ...rest, result: result.data, type: SUCCESS });
            } else if (result && result.data && result.data.message) {
              const error = {
                message: result.data.message
              };
              next({ ...rest, error, type: FAILURE });
            } else {
              const error = {
                message: 'Unexpected error occured, try again later'
              };
              next({ ...rest, error, type: FAILURE });
            }
          },
          error => {
            error.message = 'Unexpected error occured, try again later';
            next({ ...rest, error, type: FAILURE });
          }
        )
        .catch(error => {
          console.error('MIDDLEWARE ERROR:', error);
        });

      return actionPromise;
    };
  };
}
