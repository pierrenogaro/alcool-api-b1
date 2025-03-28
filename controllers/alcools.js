const Alcool = require("../models/Alcool");
const Comment = require('../models/Comment');
const categories = ['beer', 'wine', 'spirit', 'liqueur', 'cocktail', 'other'];

async function index(req, res) {
    const alcools = await Alcool.find({}).populate('author');
    res.send(alcools);
}

async function show(req, res) {
    const alcool = await Alcool.findById(req.params.id).populate('author');
    const comments = await Comment.find({ alcool: req.params.id }).populate('author');
    res.status(200).json({ alcool, comments });
}

async function create(req, res) {
    const data = req.body;

    if (!data.name || !data.degree) {
        return res.status(400).json({ error: 'Name & degree are required' });
    }

    if (data.categorie && !categories.includes(data.categorie)) {
        return res.status(400).json({error: 'Invalid categorie', categories});
    }

    data.author = req.user.userId;

    const newAlcool = await Alcool.create(data);
    res.status(201).json(newAlcool);
}

async function update(req, res) {
    const userId = req.user.userId;
    const data = req.body;

    if (!data.name || !data.degree) {
        return res.status(400).json({ error: 'Name & degree are required' });
    }

    if (data.categorie && !categories.includes(data.categorie)) {
        return res.status(400).json({
            error: 'Invalid categorie',
            categories
        });
    }

    const alcool = await Alcool.findById(req.params.id);

    if (!alcool) {
        return res.status(404).json({ error: 'Alcool not found' });
    }

    if (alcool.author.toString() !== userId) {
        return res.status(403).json({ error: 'You are not authorized to update this alcool' });
    }

    const updatedAlcool = await Alcool.findByIdAndUpdate(req.params.id, data, { new: true });
    res.status(200).json(updatedAlcool);
}

async function remove(req, res) {
    const userId = req.user.userId;

    const alcool = await Alcool.findById(req.params.id);

    if (!alcool) {
        return res.status(404).json({ error: 'Alcool not found' });
    }

    if (alcool.author.toString() !== userId) {
        return res.status(403).json({ error: 'You are not authorized to delete this alcool' });
    }

    await Alcool.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Alcool deleted successfully' });
}

async function getCategorie(req, res) {
    const { categorie } = req.params;

    if (!categories.includes(categorie)) {
        return res.status(403).json({ error: 'Invalid categorie', categories });
    }

    const alcools = await Alcool.find({ categorie }).populate('author');
    res.status(200).json(alcools);
}

async function getAllCategories(req, res) {
    res.status(200).json(categories);
}

module.exports = { index, show, create, update, remove, getCategorie, getAllCategories };