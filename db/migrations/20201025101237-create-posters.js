'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Posters', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            photo: {
                type: Sequelize.STRING
            },
            imdbID: {
                type: Sequelize.STRING,
                allowNull: true,
                foreignKey: true,

            },
            movieId: {
                type: Sequelize.INTEGER,
                allowNull: true

            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Posters');
    }
};
