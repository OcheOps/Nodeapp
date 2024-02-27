// tasks.test.js
const request = require('supertest');
const app = require('../app');

describe('Task Endpoints', () => {
  let taskId;

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({
        title: 'Task 1',
        description: 'Description for Task 1',
        status: 'pending',
        userId: 'user_id_here', // Replace with a valid user ID
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toEqual('Task 1');
    expect(res.body.description).toEqual('Description for Task 1');
    expect(res.body.status).toEqual('pending');
    taskId = res.body.id; // Store the task ID for later use
  });

  it('should return a list of tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a specific task', async () => {
    const res = await request(app).get(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(taskId);
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .send({
        title: 'Updated Task 1',
        description: 'Updated description for Task 1',
        status: 'completed',
        userId: 'user_id_here', // Replace with a valid user ID
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Updated Task 1');
    expect(res.body.description).toEqual('Updated description for Task 1');
    expect(res.body.status).toEqual('completed');
  });

  it('should delete a task', async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Task deleted successfully');
  });
  
});
