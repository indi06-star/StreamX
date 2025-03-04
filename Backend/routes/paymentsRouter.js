import express from 'express';
import { getPayments, processPayment } from '../controller/paymentsController.js';

const router = express.Router();

router.get('/', getPayments);
router.post('/pay', processPayment);

export default router;
