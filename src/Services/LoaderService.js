import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const loaderSubject = new BehaviorSubject(null);

const loaderObservable = () => {
  return loaderSubject.asObservable();
};

const enableLoader = () => {
  loaderSubject.next(true);
};

const disableLoader = () => {
  loaderSubject.next(false);
};

const LoaderService = {
  loaderObservable,
  enableLoader,
  disableLoader
};

export default LoaderService;
