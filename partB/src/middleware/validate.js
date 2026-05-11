/**
 * Validate task input before hitting the controller.
 * Keeps controllers clean — no validation logic there.
 */

const VALID_STATUSES  = ['pending', 'in-progress', 'done'];
const VALID_PRIORITIES = ['high', 'medium', 'low'];

const validateCreateTask = (req, res, next) => {
  const { title, status, priority, due_date } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ success: false, error: 'Title is required' });
  }

  if (title.trim().length > 255) {
    return res.status(400).json({ success: false, error: 'Title too long (max 255)' });
  }

  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      success: false,
      error: `Invalid status. Must be: ${VALID_STATUSES.join(', ')}`
    });
  }

  if (priority && !VALID_PRIORITIES.includes(priority)) {
    return res.status(400).json({
      success: false,
      error: `Invalid priority. Must be: ${VALID_PRIORITIES.join(', ')}`
    });
  }

  if (due_date && isNaN(Date.parse(due_date))) {
    return res.status(400).json({ success: false, error: 'Invalid due_date format' });
  }

  next();
};

const validateUpdateTask = (req, res, next) => {
  const { status, priority, due_date, title } = req.body;

  if (title !== undefined && title.trim() === '') {
    return res.status(400).json({ success: false, error: 'Title cannot be empty' });
  }

  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      success: false,
      error: `Invalid status. Must be: ${VALID_STATUSES.join(', ')}`
    });
  }

  if (priority && !VALID_PRIORITIES.includes(priority)) {
    return res.status(400).json({
      success: false,
      error: `Invalid priority. Must be: ${VALID_PRIORITIES.join(', ')}`
    });
  }

  if (due_date && isNaN(Date.parse(due_date))) {
    return res.status(400).json({ success: false, error: 'Invalid due_date format' });
  }

  next();
};

module.exports = { validateCreateTask, validateUpdateTask };
