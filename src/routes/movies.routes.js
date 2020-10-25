import express from 'express';
import {MoviesController} from '../controllers/';

const moviesRouter = express.Router();
moviesRouter.route('/')
    .get(MoviesController.list)
    .post(MoviesController.create);
moviesRouter.route('/:movieId')
    .get(MoviesController.find);
moviesRouter.param('movieId', MoviesController.load);
export default moviesRouter;
