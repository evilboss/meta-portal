require('dotenv').config();
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';
import {router} from './routes/index';
import bodyParser from 'body-parser';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));

console.log(process.cwd());
app.use('/api', router);
app.use(express.static(path.join(process.cwd() + '/movie-client/build')));
app.get('*', (req, res) => {
        res.sendFile(path.join(process.cwd() + '/movie-client/build/index.html'))
    }
);



export {app};
