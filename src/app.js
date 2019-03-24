const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const publicsDIr = path.join(__dirname, '../public');
const partialsDir = path.join(__dirname, '../partials');

app.use(express.static(publicsDIr));
app.set('view engine', 'hbs');
hbs.registerPartials(partialsDir);

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});