const Alcool = require("../models/Alcool");

async function index(req, res) {
    const alcools = await Alcool.find({});
    res.send(alcools);
}

async function show(req, res) {
    const alcool = await Alcool.findById(req.params.id);
    res.send(alcool);
}

async function create(req, res) {
    const { ...data } = req.body;

    if (!data.name || !data.degree) {
        return res.status(400).send('Name & degree are required');
    }

    const newAlcool = await Alcool.create({ ...data });
    res.status(201).json(newAlcool);
}

async function update(req, res) {
    const { ...data } = req.body;

    if (!data.name || !data.degree) {
        return res.status(400).send('Name & degree are required');
    }

    const updatedAlcool = await Alcool.findByIdAndUpdate(req.params.id, data, { new: true });

    if (updatedAlcool) {
        res.status(200).json(updatedAlcool);
    } else {
        res.status(404).send({ error: 'Alcool not found' });
    }
}

async function remove(req, res) {
    const alcool = await Alcool.findByIdAndDelete(req.params.id);

    if (alcool) {
        res.status(200).json({ message: 'Alcool deleted' });
    } else {
        res.status(404).send({ error: 'Alcool not found' });
    }
}

module.exports = { index, show, create, update, remove };