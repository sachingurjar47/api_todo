const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');
const router = express.Router();

router.post('/', authenticate, createTodo);
router.get('/', authenticate, getTodos);
router.put('/:id', authenticate, updateTodo);
router.delete('/:id', authenticate, deleteTodo);


module.exports = router;