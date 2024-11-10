const express = require('express');
const routes = require('./routes/alcools');
const app = express();
const port = 8000;

const mongoose = require('mongoose')
const mongodbUri = "mongodb://127.0.0.1:27017/alcoolsDB";

mongoose.connect(mongodbUri)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB!');
    })
    .catch((err) => {
        console.error('🔴 Failed to connect to MongoDB:', err.message);
    });


app.use(express.json());
app.use('/alcools', routes);

app.get('/', (req, res) => {
    res.send('Welcome to the alcool API 👋');
});

app.listen(port, () => {
    console.log('Server is running on port ' + port + ' ✨');
});