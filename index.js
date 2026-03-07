const express = require('express');
const app = express();

app.get('/add/:n1/:n2', (req, res) => {
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    res.status(200).json({ result: n1 + n2 });
});

app.get('/divide/:n1/:n2', (req, res) => {
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    if (n2 === 0) {
        return res.status(400).json({ error: 'Division by zero' });
    }
    res.status(200).json({ result: n1 / n2 });
});

module.exports = app;