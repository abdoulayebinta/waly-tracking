import express from 'express';
import rateLimiter from 'express-rate-limit';
import { register, login, updateUser } from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js';

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message:
    'Too many request from this IP address, please try again after 15 minutes',
});

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(authenticateUser, updateUser);

export default router;
