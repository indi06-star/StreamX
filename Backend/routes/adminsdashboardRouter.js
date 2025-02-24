import express from 'express';
import { getAdmins } from '../controller/adminsdashboardController.js';

const router = express.Router();

router.get('/', getAdmins);

export default router;
