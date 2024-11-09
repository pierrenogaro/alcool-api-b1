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
        return res.status(404).send('Product not found');
    }
    res.json(alcool);
}

module.exports = { index, show };