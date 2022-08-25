const config = require('./config');
const pg = require('pg');
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    config.dbAli.DATABASE, config.dbAli.USERNAME, config.dbAli.PASSWORD, {
    host: config.dbAli.HOST,
    dialect: 'postgres',
    dialectModule: pg
})

sequelize.sync();

module.exports = { sequelize, Model, DataTypes };