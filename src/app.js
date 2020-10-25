import express from 'express';
import path from 'path';
import logger from 'morgan';
import {router} from './routes/index';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', router);
export {app};
