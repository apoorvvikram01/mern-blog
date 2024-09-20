import express from 'express';
import { signup } from '../controllers/signUp.controller.js';
import { signin } from '../controllers/signIn.controller.js';
import { google } from '../controllers/googleSignIn.controller.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);

export default router;