const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/tasks', taskRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ success: false, error: 'Route not found' }));

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, error: err.message });
});

module.exports = app;
