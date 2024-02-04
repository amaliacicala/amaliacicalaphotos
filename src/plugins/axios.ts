import Axios, { type CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: 'https://amaliacicalaphotos.netlify.app' || 'http://localhost/api',
  // timeout: 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const axios = Axios.create(axiosConfig);

export default axios;
