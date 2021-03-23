import { check } from 'express-validator';

export const userSignupValidator = [
  check('username').not().isEmpty().withMessage('Username is required'),
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Must be a valid email address'),
  check('password').isLength({ min: 6 }).withMessage(''),
];
