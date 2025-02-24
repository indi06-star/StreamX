import express from 'express';
import { getRentals } from '../controller/rentalsController.js';

const router = express.Router();

router.get('/', getRentals);

export default router;
