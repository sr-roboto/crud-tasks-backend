import { userModel } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    const newUser = await user.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { createUser, loginUser };
