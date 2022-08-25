const axios = require('axios');
require('dotenv').config();

const quote = require('../models/quote');

const quotes = {
    getQuote: async (req, res) => {

        let result;
        const getData = await axios.get(`${process.env.url}`);

        const findQuote = await quote.findOne({ where: getData.data });


        if (findQuote != null) {
            result = {
                code: '01',
                message: 'Quote sudah pernah ditambakan'
            }
            res.send(result);
            return;
        }

        const quoteData = getData.data.quote

        await quote.create({ quote: quoteData });

        result = {
            code: '01',
            message: 'Quote berhasil ditambahkan'
        }

        res.send(result)

    },

    getQuotes: async (req, res) => {

        let result;

        const findQuotes = await quote.findAll()

        if (!findQuotes) {
            result = {
                code: '01',
                message: 'Quotes tidak ditemukan'
            }
            res.send(result);
            return;
        }

        let data = []
        findQuotes.forEach(Element => {
            console.log(Element);
        })

    }

}

module.exports = quotes;