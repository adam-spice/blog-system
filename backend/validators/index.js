import { validationResult } from 'express-validator';

export const runValidation = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(422).json({ error: result.errors[0]?.msg });
  }

  next();
};
