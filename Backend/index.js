import express from 'express';
import cors from 'cors'; 
import { config } from 'dotenv'; 
import mysql from 'mysql2/promise'; 
import comingsoonRouter from './routes/comingsoonRouter.js';
import moviesRouter from './routes/moviesRouter.js';
import usersRouter from './routes/usersRouter.js';

config(); 
const app = express();

app.use(cors());

// Middleware
app.use(express.json());
 
// Define routes
app.use('/coming_soon', comingsoonRouter); // Coming soon movies route
app.use('/movies', moviesRouter); // Movies route
app.use ('/users',usersRouter);//Users route

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Hi...');
}); 

