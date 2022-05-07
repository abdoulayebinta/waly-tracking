import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error('please provide all values');
  }

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
