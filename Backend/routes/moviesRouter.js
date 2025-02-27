import express from 'express';
import { getMovies } from '../controller/moviesController.js';

const router = express.Router();

router.get('/', getMovies);


export default router;
