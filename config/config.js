'use strict';

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DEV_DB,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.TEST_DB,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.TEST_DB,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
