import User from '../models/user.js';
import { CLIENT_URL, JWT_SECRET } from '../settings.js';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

export const signup = (req, res) => {
  const { username, name, email, password } = req.body;

  User.findOne({ email: email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    let profile = `${CLIENT_URL}/profile${username}`;

    let newUser = new User({
      name,
      email,
      password,
      profile,
      username: `@${username}`,
    });
    newUser.save((error, success) => {
      if (error) {
        return res.status(400).json({ error });
      }
      return res.status(201).json({ message: 'Signup success, please login' });
    });
  });
};

export const signIn = (req, res) => {
  const { email, password } = req.body;
  // check if user exists
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error:
          'The email and password you entered do not match our records. Please double check and try again.',
      });
    }

    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error:
          'The email and password you entered do not match our records. Please double check and try again.',
      });
    }

    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1d' });

    res.cookie('blog-token', token, { expiresIn: '1d' });

    const { _id, username, name, email, role } = user;
    return res
      .status(200)
      .json({ token, user: { _id, username, name, email, role } });
  });
};

export const signOut = (req, res) => {
  res.clearCookie('blog-token');
  res.status(200).json({ message: 'Sign out success' });
};

export const requireSignIn = expressJwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth',
});
