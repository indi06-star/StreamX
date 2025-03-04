import { getAllPayments, addPayment } from '../model/paymentsModal.js';

export const getPayments = async (req, res) => {
  try {
    const payments = await getAllPayments();
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Process a payment
export const processPayment = async (req, res) => {
  try {
    const { rental_id, user_id, amount } = req.body;

    if (!rental_id || !user_id || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const paymentSuccess = await addPayment(rental_id, user_id, amount);

    if (paymentSuccess) {
      res.status(201).json({ message: 'Payment successful' });
    } else {
      res.status(400).json({ error: 'Payment failed' });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: error.message });
  }
};
