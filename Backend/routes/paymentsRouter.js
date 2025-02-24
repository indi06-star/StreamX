import express from 'express';
import { getPayments } from '../controller/paymentsController.js';

const router = express.Router();

router.get('/', getPayments);

export default router;
