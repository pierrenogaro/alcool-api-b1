const mongoose = require('mongoose');

const AlcoolSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    degree: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    ingredients: [mongoose.SchemaTypes.String],
    description: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('Alcool', AlcoolSchema);
