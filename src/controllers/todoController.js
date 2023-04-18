const TodoService = require("../services/TodoService");



exports.get = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TodoService.getTodobyId(id);
        req.json(todo)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
exports.getAll = async (req, res) => {
    try {
        const todos = await TodoService.getAllTodos();
        if (!todos) {
            return res.status(404).json("There are no todos published yet!")
        }
        res.json(todos)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}
exports.add = async (req, res) => {
    try {
        const createdTodo = await TodoService.addTodo(req.body)
        res.status(201).json(createdTodo)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const todo = {};
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.finished = req.body.finished;
    
        const updatedTodo = await TodoService.updateTodo(id, todo);
    
        if (updatedTodo.nModified === 0) {
          return res.status(404).json({});
        }
    
        res.json(updatedTodo);
      } catch (error) {
        res.status(500).json({ error: error });
      }
}
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
      const deleteResponse = await TodoService.deleteTodo(id);
      res.json(deleteResponse);
    } catch (err) {
      res.status(500).json({ error: err })
    }
}