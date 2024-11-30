import { check } from 'express-validator'

export const messageValidator = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please provide a valid email').isEmail().normalizeEmail(),
  check('phone', 'Phone number is required').notEmpty(),
  check('time', 'Time is required').notEmpty(),
  check('date', 'Please provide a valid date').isISO8601(),
  check('message', 'Message is required').notEmpty()
]
