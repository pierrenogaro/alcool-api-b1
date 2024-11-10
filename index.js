require('dotenv').config();
const express = require('express');
const alcoolsRoutes = require('./routes/alcools');
const authRoutes = require('./routes/auth');
const app = express();
const port = 8000;
const mongoose = require('mongoose')
const authMiddleware = require("./middlewares/authMiddleware");
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB!');
    })
    .catch((err) => {
        console.error('🔴 Failed to connect to MongoDB:', err.message);
    });


app.use(express.json());
app.use('/alcools', authMiddleware, alcoolsRoutes);
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the alcool API 👋');
});

app.listen(port, () => {
    console.log('Server is running on port ' + port + ' ✨');
});