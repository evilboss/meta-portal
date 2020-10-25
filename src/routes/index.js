import express from 'express';
import moviesRoutes from "./movies.routes";
import searchRouter from './searches.routes';

const router = express.Router();
router.get('/', (req, res) => res.send('OK'));
router.use('/movies', moviesRoutes);
router.use('/searches', searchRouter);
export {router};
