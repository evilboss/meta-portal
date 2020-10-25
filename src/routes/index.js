import express from 'express';
import moviesRoutes from "./movies.routes";

const router = express.Router();
router.get('/', (req, res) => res.send('OK'));
router.use('/movies', moviesRoutes);
export {router};
