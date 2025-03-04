import express from 'express';
import { getUsers, getUserById, resetPassword,signUpUser, loginUser} from '../controller/usersController.js';

const router = express.Router();

// Get all users
router.get('/', getUsers);
// Get a user by user_id
router.get('/users/:user_id', getUserById);
// Reset password
router.patch('/reset-password', resetPassword);
//SignUp User
router.post('/signup', signUpUser); // User sign-up
//Login
router.post('/login',loginUser);


export default router;