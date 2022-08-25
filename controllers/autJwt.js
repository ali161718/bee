const jwt = require('jsonwebtoken');
require('dotenv').config();

const genToken = (payload) => {
    return jwt.sign(payload, process.env.secret)
}

const getToken = async (req, res, next) => {

    let result;
    const bearerHeader = req.headers['authorization']

    try {

        if (!bearerHeader) {
            result = {
                ResponseCode: "01",
                ResponseDescription: "Token tidak ada",
                ResponseException: ""
            }

            res.status(403).send(result)


        } else {
            const token = bearerHeader.split(' ')[1]

            jwt.verify(token, process.env.secret)

            next()
        }

    } catch (error) {
        result = {
            ResponseCode: "01",
            ResponseDescription: "Error",
            ResponseException: error.message ? error.message : ""
        }

        res.status(403).send(result);
    }

}

module.exports = { genToken, getToken }