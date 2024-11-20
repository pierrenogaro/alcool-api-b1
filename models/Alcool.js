const mongoose = require('mongoose');

const AlcoolSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    degree: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    ingredients: [mongoose.Schema.Types.String],
    description: mongoose.Schema.Types.String,

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Alcool', AlcoolSchema);
