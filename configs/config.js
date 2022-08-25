require('dotenv').config();

module.exports.dbAli = {
    HOST: process.env.DB_HOST,
    DATABASE: process.env.DB_DATABASE,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD
}