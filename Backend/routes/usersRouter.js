import express from 'express';
import { getUsers, getUserById, signUpUser, deleteUser, patchUser, loginController} from '../controller/usersController.js';
const router = express.Router();
router.get('/', getUsers);
router.get('/:user_id', getUserById);
router.post('/', signUpUser);
router.delete('/:user_id', deleteUser);
router.patch('/:user_id', patchUser);
router.post('/login', loginController);
export default router;