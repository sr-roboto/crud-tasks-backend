import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../configs/dotenv.config.js';

export const auth = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res
        .status(401)
        .json({ message: 'No token, authorization denied' });

    jwt.verify(token, JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ message: 'Token is not valid' });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
