const request = require('supertest');
const app = require('../src/app');

describe('Task Filter & Sort API', () => {

  // Setup — тест өгөгдөл үүсгэх
  beforeAll(async () => {
    await request(app).post('/api/tasks').send({
      title: 'High priority task',
      priority: 'high',
      due_date: '2020-01-01',
      status: 'pending'
    });
    await request(app).post('/api/tasks').send({
      title: 'Low priority task',
      priority: 'low',
      due_date: '2099-12-31',
      status: 'pending'
    });
  });

  it('should return overdue tasks', async () => {
    const res = await request(app).get('/api/tasks/overdue');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    // 2020-01-01 өнөөдрөөс өмнө тул overdue байх ёстой
    expect(res.body.count).toBeGreaterThan(0);
  });

  it('should return tasks sorted by priority', async () => {
    const res = await request(app).get('/api/tasks/by-priority');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    const priorities = res.body.data.map(t => t.priority);
    const highIdx = priorities.indexOf('high');
    const lowIdx  = priorities.indexOf('low');
    if (highIdx !== -1 && lowIdx !== -1) {
      expect(highIdx).toBeLessThan(lowIdx);
    }
  });

  it('should filter tasks by status=pending', async () => {
    const res = await request(app).get('/api/tasks?status=pending');
    expect(res.statusCode).toBe(200);
    res.body.data.forEach(t => expect(t.status).toBe('pending'));
  });

  it('should filter tasks by priority=high', async () => {
    const res = await request(app).get('/api/tasks?priority=high');
    expect(res.statusCode).toBe(200);
    res.body.data.forEach(t => expect(t.priority).toBe('high'));
  });

  it('should search tasks by title keyword', async () => {
    const res = await request(app).get('/api/tasks?search=High');
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data[0].title).toMatch(/High/i);
  });

});
