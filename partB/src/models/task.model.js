const db = require('../db/database');

// Get all tasks with optional filters
const getAllTasks = ({ status, priority, label, search } = {}) => {
  let query = 'SELECT * FROM tasks WHERE 1=1';
  const params = [];

  if (status) { query += ' AND status = ?'; params.push(status); }
  if (priority) { query += ' AND priority = ?'; params.push(priority); }
  if (label) { query += ' AND label = ?'; params.push(label); }
  if (search) { query += ' AND title LIKE ?'; params.push(`%${search}%`); }

  query += ' ORDER BY created_at DESC';
  return db.prepare(query).all(...params);
};

const getTaskById = (id) => db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);

const createTask = (data) => {
  const stmt = db.prepare(`
    INSERT INTO tasks (title, description, status, priority, due_date, label)
    VALUES (@title, @description, @status, @priority, @due_date, @label)
  `);
  const result = stmt.run(data);
  return getTaskById(result.lastInsertRowid);
};

const updateTask = (id, data) => {
  const fields = Object.keys(data).map(k => `${k} = @${k}`).join(', ');
  db.prepare(`UPDATE tasks SET ${fields}, updated_at = datetime('now') WHERE id = @id`)
    .run({ ...data, id });
  return getTaskById(id);
};

const deleteTask = (id) => {
  const task = getTaskById(id);
  db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
  return task;
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };

// Get overdue tasks (due_date < today)
const getOverdueTasks = () => {
  return db.prepare(`
    SELECT * FROM tasks
    WHERE due_date < date('now')
    AND status != 'done'
    ORDER BY due_date ASC
  `).all();
};

// Get tasks sorted by priority
const getTasksSortedByPriority = () => {
  return db.prepare(`
    SELECT * FROM tasks
    ORDER BY CASE priority
      WHEN 'high'   THEN 1
      WHEN 'medium' THEN 2
      WHEN 'low'    THEN 3
      ELSE 4
    END
  `).all();
};

module.exports = {
  getAllTasks, getTaskById, createTask,
  updateTask, deleteTask,
  getOverdueTasks, getTasksSortedByPriority
};
