import {Sequelize, DataTypes} from 'sequelize';
import {sequelize} from '../utils/connection';

export const Posters = sequelize.define('Posters', {
    imdbId: {
        type: Sequelize.STRING
    },
    photo: {
        type: Sequelize.STRING
    },
    movieId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false

    },
});

