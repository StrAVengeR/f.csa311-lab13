const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/task.controller');

router.get('/',            ctrl.getAllTasks);
router.get('/overdue',     ctrl.getOverdueTasks);
router.get('/by-priority', ctrl.getTasksSortedByPriority);
router.get('/:id',         ctrl.getTaskById);
router.post('/',           ctrl.createTask);
router.put('/:id',         ctrl.updateTask);
router.delete('/:id',      ctrl.deleteTask);

module.exports = router;
