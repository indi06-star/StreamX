import {pool} from '../config/config.js'; // Ensure this is your MySQL connection pool

export const getAllpayments = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM payments'); // Assuming your table is 'movies'
    return rows;
  } catch (error) {
    throw error;
  }
};
