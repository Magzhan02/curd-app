import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6320a58ae3bdd81d8eff1015.mockapi.io',
});

export default instance;
