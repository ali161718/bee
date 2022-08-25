const express = require('express');
const router = express.Router();

const user = require('../controllers/user');
const quotes = require('../controllers/quotes');

/* GET home page. */
router.post('/login', user.postLogin);
router.post('/user', user.postUser);
router.get('/api/quote', quotes.getQuote);
router.get('/api/quotes', quotes.getQuotes);
router.post('/api/quote', quotes.postQuote);
router.put('/api/quote/:id', quotes.putQuote);
router.delete('/api/quote/:id', quotes.deleteQuote);

module.exports = router;
