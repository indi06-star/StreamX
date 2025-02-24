import mysql from 'mysql2/promise';
import express from 'express';
import cors from 'cors'; // Ensure cross-origin resource sharing is allowed
import { config } from 'dotenv';
import bcrypt from 'bcrypt';
import comingsoonRouter from './routes/comingsoonRouter.js';
import moviesRouter from './routes/moviesRouter.js';
// import paymentsRouter from './routes/paymentsRouter.js';
// import rentalsRouter from './routes/rentalsRouter.js';
// import usersRouter from './routes/usersRouter.js'; 
config();
const app = express();
// Use CORS for enabling cross-origin requests
app.use(cors());
// Middleware to parse incoming requests as JSON
app.use(express.json());


app.use('/coming_soon',comingsoonRouter );
app.use('/movies',moviesRouter );
// app.use('/payments',paymentsRouter );
// app.use('/rentals', rentalsRouter);
// app.use('/api/users', usersRouter);
// app.use('/users', usersRouter); 

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Hi...');
});

