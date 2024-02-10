import axios from 'axios';
import { BASE_URL } from '../constants';

const version = 'v1/';

let API = axios.create({
  baseURL: BASE_URL + '/api/',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus: () => true,
});

// log URL API
API.interceptors.response.use((response) => {
  if (response?.request?.responseURL) {
    // console.log(
    //   'URL ->',
    //   '\u001b[34m' +
    //     decodeURI(response?.request?.responseURL.replace(BASE_URL, '')),
    // );
  }
  return response;
});
export default API;
// Call setApiHeader when login success
export const setApiHeader = (token: string) => {
  API.defaults.headers.Authorization = `Bearer ${token}`;
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};
