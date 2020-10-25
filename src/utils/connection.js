import {Sequelize} from "sequelize";
const env = process.env.NODE_ENV || 'development';

const config = require(__dirname + '/../../config/database.js')[env];

export const sequelize = new Sequelize(config)
