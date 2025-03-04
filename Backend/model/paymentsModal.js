import { pool } from '../config/config.js';

// Get all payments
export const getAllPayments = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM payments');
    return rows;
  } catch (error) {
    console.error('Database error in getAllPayments:', error);
    throw new Error('Database query failed');
  }
};

// Get rental details by rental_id
export const getRentalById = async (rental_id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM rentals WHERE rental_id = ?', [rental_id]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw error;
  }
};

// Add a payment
export const addPayment = async (rental_id, user_id, amount) => {
  try {
    const rental = await getRentalById(rental_id);
    if (!rental) throw new Error('Rental not found');

    if (parseFloat(amount) !== parseFloat(rental.total_cost)) {
      throw new Error('Payment amount does not match rental cost');
    }

    const query = `
      INSERT INTO payments (rental_id, user_id, amount, payment_method)
      VALUES (?, ?, ?, 'Credit/Debit Card')
    `;
    const [result] = await pool.query(query, [rental_id, user_id, amount]);

    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};
