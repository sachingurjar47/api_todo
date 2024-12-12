const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description, user: req.user.id });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const todos = await Todo.find({ user: req.user.id })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};