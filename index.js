const express = require('express');
const app = express();

// ... HNA KATKON LOGIQUE DYALK (ROUTES: /add, /divide...) ...
// Mital:
app.get('/add/:a/:b', (req, res) => {
    const result = parseInt(req.params.a) + parseInt(req.params.b);
    res.json({ result: result });
});

app.get('/divide/:a/:b', (req, res) => {
    if (req.params.b == 0) {
        return res.status(400).json({ error: "Division by zero" });
    }
    const result = parseInt(req.params.a) / parseInt(req.params.b);
    res.json({ result: result });
});

// L-MOHIM HWA HADA: Exporté app, matdirch app.listen hna!
module.exports = app;