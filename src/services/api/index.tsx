import axios from 'axios';

export const API = axios.create({
  // TODO: move to  .env
  baseURL: 'https://api.sampleapis.com'
});
