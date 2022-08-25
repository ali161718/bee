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

        // console.log(findQuotes);
        console.log(findQuotes[0]);
        let dataTrue = [], dataFalse = [];
        findQuotes.forEach(Element => {
            console.log(Element.quote);
            // Element.Quote.dataValues.favorites == true ? dataTrue.push(Element.Quote.dataValues) : dataFalse.push(Element.Quote.dataValues);
        })

        console.log(dataTrue);
        console.log(dataFalse);

    },

    postQuote: async (req, res) => {

        let result;
        const payload = req.body;

        const findQuote = await quote.findOne({ where: { quote: payload.quote } });

        if (findQuote != null) {
            result = {
                code: '01',
                message: 'quote sudah pernah di buat'
            }
            res.send(result);
            return;
        }

        await quote.create(payload);

        result = {
            code: '00',
            message: 'Quote berhasil ditambahkan'
        }

        res.send(result);
    },

    putQuote: async (req, res) => {

        let result;
        const id = req.params.id
        const payload = req.body;

        const findQuote = await quote.findByPk(id)

        if (findQuote == null) {
            result = {
                code: '01',
                message: 'quote tidak ditemukan'
            }
            res.send(result);
            return;
        }

        await quote.update({
            quote: payload.quote, favorites: payload.favorites
        }, { where: { id } })

        result = {
            code: '00',
            message: 'Quote berhasil diubah'
        }

        res.send(result);
    },

    deleteQuote: async (req, res) => {

        let result;
        const id = req.params.id

        const findQuote = await quote.findByPk(id)

        if (findQuote == null) {
            result = {
                code: '01',
                message: 'quote tidak ditemukan'
            }
            res.send(result);
            return;
        }

        await quote.destroy({ where: { id } })

        result = {
            code: '00',
            message: 'Quote berhasil didelete'
        }

        res.send(result);
    }

}

module.exports = quotes;