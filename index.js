require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors'); // D'abord importez cors
const alcoolsRoutes = require('./routes/alcools');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comments');
const app = express();
const port = 8081;
const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB!');
    })
    .catch((err) => {
        console.error('🔴 Failed to connect to MongoDB:', err.message);
    });

// Placez cette ligne ici, après avoir créé l'app express et avant vos middlewares/routes
app.use(cors({
    origin: 'http://localhost:5173' // Autorise uniquement votre frontend React
}));

app.use(express.json());
app.use('/alcools', alcoolsRoutes);
app.use('/auth', authRoutes);
app.use('/images', express.static('images'));
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.listen(port, () => {
    console.log('Server is running on port ' + port + ' ✨');
});