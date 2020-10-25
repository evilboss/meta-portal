import {DataTypes} from 'sequelize';
import {sequelize} from '../utils/connection';

export const Searches = sequelize.define('Searches', {
    searchKey: DataTypes.STRING,
    pageCount: DataTypes.INTEGER,
    apiStatus: DataTypes.BOOLEAN,
});

