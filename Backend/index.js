import express from 'express';
import cors from 'cors'; 
import { config } from 'dotenv'; 
import comingsoonRouter from './routes/comingsoonRouter.js';
import moviesRouter from './routes/moviesRouter.js';
import usersRouter from './routes/usersRouter.js';
import paymentsRouter from './routes/paymentsRouter.js';
import rentalsRouter from './routes/rentalsRouter.js';

config(); 
const app = express();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/coming_soon', comingsoonRouter);
app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/payments', paymentsRouter);
app.use('/rentals', rentalsRouter);

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
