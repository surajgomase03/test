const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ status: 'ok', service: 'api' }));
app.listen(3000, () => console.log('api listening on 3000'));
module.exports = app;