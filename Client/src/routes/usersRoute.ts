
import express from 'express';
import { register, login } from '../modules/users/userController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.put('/update-profile/:id', updateProfile);

export default router;
