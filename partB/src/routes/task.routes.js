const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/task.controller');
const { validateCreateTask, validateUpdateTask } = require('../middleware/validate');

router.get('/',            ctrl.getAllTasks);
router.get('/overdue',     ctrl.getOverdueTasks);
router.get('/by-priority', ctrl.getTasksSortedByPriority);
router.get('/:id',         ctrl.getTaskById);
router.post('/',           validateCreateTask, ctrl.createTask);
router.put('/:id',         validateUpdateTask, ctrl.updateTask);
router.delete('/:id',      ctrl.deleteTask);

module.exports = router;
