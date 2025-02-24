import { getAllpayments } from '../model/paymentsModal.js';

export const getPayments = async (req, res) => {
  try {
    const payments = await getAllpayments();
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
