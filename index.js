const express = require('express');
const routes = require('./routes/alcools');
const app = express();
const port = 8000;

app.use(express.json());
app.use('/alcools', routes);

app.get('/', (req, res) => {
    res.send('Welcome to the alcool API 👋');
});

app.listen(port, () => {
    console.log('Server is running on port ' + port + ' ✨');
});