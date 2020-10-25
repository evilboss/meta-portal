require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DBUSER,
        password: (process.env.DBPASS) ? process.env.DBPASS : null,
        database: process.env.DBNAME,
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        dialect: process.env.DBDIALECT,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        port: process.env.PROD_DB_PORT,
    }
};
