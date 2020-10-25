import {Sequelize, DataTypes} from 'sequelize';
import {sequelize} from '../utils/connection';

export const Movies = sequelize.define('Movies', {
    Title: {
        type: Sequelize.STRING,
        allowNull: false

    },
    Year: {
        type: Sequelize.STRING,
        allowNull: false

    },
    imdbID: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false

    },
    Type: {
        type: Sequelize.STRING,
        allowNull: false

    },
});

