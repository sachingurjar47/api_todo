const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { _id, name } = user;  // Separate destructuring
    const token = jwt.sign({ id: _id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });

    res.json({
      user: {
        id: _id,
        name,
        email: user.email  // Use the email property from the user object
      },
      token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const jwtBlacklist = new Set();
exports.logout = (req, res) => {
 const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    jwtBlacklist.add(token);
  }
  res.clearCookie('authToken', { path: '/' });
  res.status(200).json({ message: 'Logged out successfully' });
};
