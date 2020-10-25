require('dotenv').config();
import express from 'express';
import path from 'path';
import logger from 'morgan';
import {router} from './routes/index';
import bodyParser from 'body-parser';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', router);
export {app};
