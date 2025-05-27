import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';




export const userLogin = async (req, res) => {
  const { email, password } = req.body ?? {};

  try {
    const isExist = await User.findOne({ email });
    if (!isExist) return res.status(401).json({ message: 'invalid credential' });

    const pass = bcrypt.compareSync(password, isExist.password);
    if (!pass) return res.status(401).json({ message: 'invalid credential' });
    const token = jwt.sign({
      id: isExist._id,
      role: isExist.role
    }, 'secret');
    return res.status(200).json({
      token,
      role: isExist.role
    });


  } catch (error) {
    return res.status(400).json({ messgage: `${err}` });
  }

}


export const userRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const isExist = await User.findOne({ email });
    if (isExist) return res.status(409).json({ message: 'user already exist' });
    const hash = bcrypt.hashSync(password, 10);

    await User.create({
      username,
      email,
      password: hash
    });
    return res.status(201).json({ message: 'user successfully registered' });

  } catch (err) {

    return res.status(400).json({ messgage: `${err}` });

  }

}


export const getUserProfile = async (req, res) => {
  const id = req.userId;
  try {
    const user = await User.findById(id);
    return res.status(200).json({
      username: user.username,
      email: user.email,
      role: user.role
    });
  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });
  }
}


export const updateProfile = async (req, res) => {
  const { username, email } = req.body ?? {};
  const id = req.userId;
  try {
    const user = await User.findById(id);
    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();
    return res.status(200).json({ message: 'profile successfully updated' });

  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });
  }
}