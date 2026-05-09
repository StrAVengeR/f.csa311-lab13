const request = require('supertest');
const app = require('../src/app');

describe('Task API', () => {
  let createdId;

  // CREATE
  it('should create a task with valid data', async () => {
    const res = await request(app).post('/api/tasks').send({ title: 'Test task' });
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe('Test task');
    createdId = res.body.data.id;
  });

  it('should return 400 when title is missing', async () => {
    const res = await request(app).post('/api/tasks').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('should return 400 when title is empty string', async () => {
    const res = await request(app).post('/api/tasks').send({ title: '   ' });
    expect(res.statusCode).toBe(400);
  });

  // READ
  it('should get all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('should get task by id', async () => {
    const res = await request(app).get(`/api/tasks/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.id).toBe(createdId);
  });

  it('should return 404 for non-existent task', async () => {
    const res = await request(app).get('/api/tasks/99999');
    expect(res.statusCode).toBe(404);
  });

  // UPDATE
  it('should update a task', async () => {
    const res = await request(app)
      .put(`/api/tasks/${createdId}`)
      .send({ status: 'done' });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.status).toBe('done');
  });

  it('should return 404 when updating non-existent task', async () => {
    const res = await request(app).put('/api/tasks/99999').send({ status: 'done' });
    expect(res.statusCode).toBe(404);
  });

  // DELETE
  it('should delete a task', async () => {
    const res = await request(app).delete(`/api/tasks/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it('should return 404 when deleting non-existent task', async () => {
    const res = await request(app).delete('/api/tasks/99999');
    expect(res.statusCode).toBe(404);
  });
});
