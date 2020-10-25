import express from 'express';
import {SearchesController} from '../controllers/';

const searchRouter = express.Router();
searchRouter.route('/')
    .get(SearchesController.list);
export default searchRouter;
