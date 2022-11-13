const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./controller/pages');
port = process.env.PORT || 80

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pagesRouter);

app.listen(port, ()=> {
    console.log('Express server is running');
});