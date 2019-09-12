const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hi there, my guy</h1>');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});