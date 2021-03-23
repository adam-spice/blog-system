import express from 'express';
import { signup } from '../controllers/auth.js';

const router = express.Router();

// validation
import { runValidation } from '../validators/index.js';
import { userSignupValidator } from '../validators/auth.js';

router.post('/signup', userSignupValidator, runValidation, signup);

export default router;
