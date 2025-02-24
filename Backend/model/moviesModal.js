import {pool} from '../config/config.js'; // Ensure this is your MySQL connection pool

export const getAllMovies = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM movies'); // Assuming your table is 'movies'
    return rows;
  } catch (error) {
    throw error;
  }
};
