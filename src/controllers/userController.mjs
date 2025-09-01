import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if(existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User ({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    console.log(newUser);

    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async(req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.status(200).json({ message: 'Logout successful (token invalidated on client side)' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
