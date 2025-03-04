import express from 'express';
import mockAuth from '../middleware/mockAuth.js';
import { rentMovie } from '../controller/rentalsController.js'; // FIXED: Import correct function

const router = express.Router();

router.post('/', mockAuth, rentMovie); // FIXED: Correct function name

export default router;
