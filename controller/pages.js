const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
/*
                            Home page
*/
//home page
router.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' });
});
router.get('/quiz', (req, res) => {
    res.render('quiz', { pageTitle: 'Quiz' });
});
router.get('/results', (req, res) => {
    res.render('results', { pageTitle: 'results'});
})
router.get('/AboutUs', (req, res) => {
    res.render('AboutUs', { pageTitle: 'AboutUs'});
})
module.exports = router;