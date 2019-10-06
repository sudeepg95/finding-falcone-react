import LoaderService from './LoaderService';

const API_URL =
  process.env.REACT_APP_API_BASE_URL !== ''
    ? process.env.REACT_APP_API_BASE_URL
    : window.location.hostname;
const urlProtocol = 'https:';

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    LoaderService.disableLoader();
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

const handleFailure = response => {
  const error = (response && response.message) || response.statusText;
  LoaderService.disableLoader();
  // eslint-disable-next-line no-console
  console.log(error);
  return Promise.reject(error);
};

const APIService = {};

export default APIService;
