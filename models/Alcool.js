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
    category: {
        type: mongoose.Schema.Types.String,
        enum: ['beer', 'wine', 'spirit', 'liqueur', 'cocktail', 'other'],
        default: 'other'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Alcool', AlcoolSchema);
