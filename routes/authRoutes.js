import express from 'express';
import { route } from 'express/lib/router';
import { register, login, updateUser } from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(updateUser);

export default route;
