const user = require('../models/user');
const { genToken } = require('./autJwt');

const users = {
    postUser: async (req, res) => {

        let result;
        const payload = req.body;

        const findUser = await user.findOne({ where: { email: payload.email } });

        if (findUser != null) {
            result = {
                code: '01',
                message: 'email sudah pernah di buat'
            }
            res.send(result);
            return;
        }

        await user.create(payload);

        result = {
            code: '00',
            message: 'User berhasil ditambahkan'
        }

        res.send(result);


    },

    postLogin: async (req, res) => {

        let result;
        const payload = req.body;

        const findUser = await user.findOne({
            where:
                { email: payload.email, password: payload.password }
        });

        if (!findUser) {
            result = {
                code: '01',
                message: 'email / password tidak ditemukan'
            }
            res.send(result);
            return;
        }

        const token = genToken(payload.email);

        result = {
            code: '00',
            message: 'Login berhasil',
            data: token
        }

        res.send(result);

    }
}

module.exports = users;