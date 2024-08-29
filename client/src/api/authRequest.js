import { axios } from './axios.js';

const login = async (user) => {
  try {
    const response = await axios.post('/login', user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const register = async (user) => {
  try {
    const response = await axios.post('/register', user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { login, register };
