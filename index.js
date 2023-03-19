const express = require('express');
const path = require('path');

const app = express();

const indexPath = path.join(__dirname, '../public');

app.use(express.static(indexPath));

app.get('', (req, res) => {
    res.send('<h1>HELLO</h1>');
});

app.get('/about', (req, res) => {
    res.send("hemnath's about page");
});

app.listen('3001', () => {
    console.log('Server up and running');
});
