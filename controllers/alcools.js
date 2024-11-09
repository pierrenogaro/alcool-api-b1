const alcools = [
    {
        id: "1",
        name: "Wine",
        degree: "12%",
        ingredients: ["grapes", "yeast"],
        description: "A fermented drink made from grapes, popular for its rich taste and aroma."
    },
    {
        id: "2",
        name: "Whiskey",
        degree: "40%",
        ingredients: ["barley", "water"],
        description: "A distilled spirit aged in barrels, known for its complex, smoky flavor."
    },
    {
        id: "3",
        name: "Vodka",
        degree: "40%",
        ingredients: ["potatoes", "water"],
        description: "A clear spirit typically made from grains or potatoes, popular in mixed drinks."
    },
    {
        id: "4",
        name: "Rum",
        degree: "35-50%",
        ingredients: ["sugarcane", "molasses"],
        description: "A sweet, caramel-flavored spirit made from sugarcane or molasses, often aged in barrels."
    },
    {
        id: "5",
        name: "Tequila",
        degree: "38-40%",
        ingredients: ["blue agave"],
        description: "A Mexican spirit made from the blue agave plant, known for its distinct, earthy taste."
    }
];

function index(req, res) {
    res.json(alcools);
}

function show(req, res) {
    const id = req.params.id;
    const alcool = alcools.find(alcool => alcool.id === id);
    if (!alcool) {
        return res.status(404).send('Alcool not found');
    }
    res.json(alcool);
}

function create(req, res) {
    const { name, degree, ingredients, description } = req.body;
    if (!name || !degree) {
        return res.status(400).send('Name & degree are required');
    }

    const newAlcool = {
        id: (alcools.length + 1).toString(),
        name,
        degree,
        ingredients,
        description
    };

    alcools.push(newAlcool);
    res.status(201).json(newAlcool);
}

function update(req, res) {
    const { name, degree, ingredients, description } = req.body;
    const id = req.params.id;
    const alcoolIndex = alcools.findIndex(alcool => alcool.id === id);

    if (alcoolIndex === -1) {
        return res.status(404).send('Alcool not found');
    }
    if (!name || !degree || !ingredients || !description) {
        return res.status(400).send('Name & degree are required');
    }

    const updatedAlcool = {
        id: alcools[alcoolIndex].id,
        name,
        degree,
        ingredients,
        description
    };

    alcools[alcoolIndex] = updatedAlcool;
    res.status(200).json(updatedAlcool);
}

function deleteAlcool(req, res) {
    const id = req.params.id;
    const alcool = alcools.findIndex(alcool => alcool.id === id);

    if (alcool === -1) {
        return res.status(404).send('Alcool not found');
    }

    alcools.splice(alcool, 1);
    res.status(200).json('Alcool deleted');
}

module.exports = { index, show, create, update, deleteAlcool };