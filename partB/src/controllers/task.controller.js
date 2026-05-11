const taskModel = require('../models/task.model');

const getAllTasks = (req, res) => {
  try {
    const filters = {
      status: req.query.status,
      priority: req.query.priority,
      label: req.query.label,
      search: req.query.search,
    };
    const tasks = taskModel.getAllTasks(filters);
    res.json({ success: true, data: tasks, count: tasks.length });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const getTaskById = (req, res) => {
  try {
    const task = taskModel.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
    res.json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const createTask = (req, res) => {
  try {
    const { title, description, status, priority, due_date, label } = req.body;
    if (!title || title.trim() === '') {
      return res.status(400).json({ success: false, error: 'Title is required' });
    }
    const task = taskModel.createTask({
      title: title.trim(),
      description: description || null,
      status: status || 'pending',
      priority: priority || 'medium',
      due_date: due_date || null,
      label: label || null,
    });
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const updateTask = (req, res) => {
  try {
    const task = taskModel.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
    const updated = taskModel.updateTask(req.params.id, req.body);
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const deleteTask = (req, res) => {
  try {
    const task = taskModel.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
    taskModel.deleteTask(req.params.id);
    res.json({ success: true, message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };

const getOverdueTasks = (req, res) => {
  try {
    const tasks = taskModel.getOverdueTasks();
    res.json({ success: true, data: tasks, count: tasks.length });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const getTasksSortedByPriority = (req, res) => {
  try {
    const tasks = taskModel.getTasksSortedByPriority();
    res.json({ success: true, data: tasks, count: tasks.length });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllTasks, getTaskById, createTask,
  updateTask, deleteTask,
  getOverdueTasks, getTasksSortedByPriority
};
