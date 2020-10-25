import express from 'express';

const moviesRouter = express.Router();
moviesRouter.route('/')
    .get((req, res) => res.send('OK movies get'))
    .post((req, res) => res.send('ok movies post'));
moviesRouter.route('/:movieId').get((req, res) => {
    res.send('MovieId')
})


export default moviesRouter;
