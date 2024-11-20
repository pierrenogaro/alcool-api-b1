const Alcool = require("../models/Alcool");
const Comment = require('../models/Comment');

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
        return res.status(400).send('Name & degree are required');
    }

    data.author = req.user.userId;

    const newAlcool = await Alcool.create(data);
    res.status(201).json(newAlcool);
}

async function update(req, res) {
    const userId = req.user.userId;
    const data = req.body;

    if (!data.name || !data.degree) {
        return res.status(400).send('Name & degree are required');
    }

    const alcool = await Alcool.findById(req.params.id);

    if (!alcool) {
        return res.status(404).send({ error: 'Alcool not found' });
    }

    if (alcool.author.toString() !== userId) {
        return res.status(403).send({ error: 'You are not authorized to update this alcool' });
    }

    const updatedAlcool = await Alcool.findByIdAndUpdate(req.params.id, data, { new: true });
    res.status(200).json(updatedAlcool);
}

async function remove(req, res) {
    const userId = req.user.userId;

    const alcool = await Alcool.findById(req.params.id);

    if (!alcool) {
        return res.status(404).send({ error: 'Alcool not found' });
    }

    if (alcool.author.toString() !== userId) {
        return res.status(403).send({ error: 'You are not authorized to delete this alcool' });
    }

    await Alcool.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Alcool deleted successfully' });
}

module.exports = { index, show, create, update, remove };