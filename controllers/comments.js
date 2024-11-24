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

async function update(req, res) {
    const userId = req.user.userId;
    const data = req.body;

    if (!data.content) {
        return res.status(400).send('Content is required');
    }

    const comment = await Comment.findById(req.params.id);

    if (!comment) {
        return res.status(404).send({ error: 'Comment not found' });
    }

    if (comment.author.toString() !== userId) {
        return res.status(403).send({ error: 'You are not authorized to update this comment' });
    }

    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { content: data.content }, { new: true });
    res.status(200).json(updatedComment);
}

async function remove(req, res) {
    const userId = req.user.userId;
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
        return res.status(404).send({ error: 'Comment not found' });
    }

    if (comment.author.toString() !== userId) {
        return res.status(403).send({ error: 'You are not authorized to delete this comment' });
    }

    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Comment deleted successfully' });
}

module.exports = { create, update, remove };