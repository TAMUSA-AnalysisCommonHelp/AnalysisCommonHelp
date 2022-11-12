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
module.exports = router;