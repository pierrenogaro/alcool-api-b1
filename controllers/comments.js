const Comment = require('../models/Comment');

async function create(req, res) {
    const { alcoolId } = req.params;
    const { content } = req.body;

    if (!content) {
        return res.status(400).send('Content is required');
    }

    const comment = new Comment({
        content,
        author: req.user.userId,
        alcool: alcoolId
    });

    await comment.save();
    res.status(201).json(comment);
}

module.exports = { create };