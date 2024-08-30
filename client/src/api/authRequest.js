import axios from './axios.js';

const loginRequest = async (user) => {
  try {
    const response = await axios.post('/login', user);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const registerRequest = async (user) => {
  try {
    const response = await axios.post('/register', user);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { loginRequest, registerRequest };
