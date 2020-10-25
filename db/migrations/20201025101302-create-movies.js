'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Movies',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
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
        await queryInterface.dropTable('Movies');
    }
};
