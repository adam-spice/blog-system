import express from 'express';
import { requireSignIn, signIn, signOut, signup } from '../controllers/auth.js';

const router = express.Router();

// validation
import { runValidation } from '../validators/index.js';
import {
  userSignInValidator,
  userSignupValidator,
} from '../validators/auth.js';

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signIn', userSignInValidator, runValidation, signIn);
router.get('/signOut', signOut);

//testing
router.get('/secret', requireSignIn, (req, res) => {
  res.json({
    message: 'You have access to secret place',
  });
});

export default router;
