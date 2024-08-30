import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loginRequest, registerRequest } from '../api/authRequest';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      return res;
    } catch (error) {
      console.error('Error logging in', error);
      setError(error.res.data);
    }
  };

  const register = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      return res;
    } catch (error) {
      console.error('Error registering', error);
      setError(error.res.data);
    }
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    if (error !== null) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (user !== null) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, login, register, error, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
