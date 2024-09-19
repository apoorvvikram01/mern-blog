import express from 'express';
import { signup } from '../controllers/signUp.controller.js';
import { signin } from '../controllers/signIn.controller.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/signin',signin);

export default router;