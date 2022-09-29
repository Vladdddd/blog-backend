import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Wrong email format').isEmail(),
  body('password', 'Password must be more then 4 characters').isLength({ min: 5 }),
  body('fullName', 'FullName must be more then 1 character').isLength({ min: 2 }),
  body('avatarUrl', 'Wrong avatar url').optional().isURL(),
];

export const loginValidation = [
  body('email', 'Wrong email format').isEmail(),
  body('password', 'Password must be more then 4 characters').isLength({ min: 5 }),
];

export const postCreateValidation = [
  body('title', 'Enter article title').isLength({ min: 3 }).isString(),
  body('text', 'Enter the text of the article').isLength({ min: 5 }).isString(),
  body('theme', 'Wrong theme format').optional().isString(),
  body('imageUrl', 'Wrong image url').optional().isString(),
];