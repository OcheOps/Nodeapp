// users.test.js
const request = require('supertest');
const app = require('../app');

describe('User Endpoints', () => {
  let userId;

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toEqual('John Doe');
    expect(res.body.email).toEqual('john@example.com');
    userId = res.body.id; // Store the user ID for later use
  });

  it('should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a specific user', async () => {
    const res = await request(app).get(`/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(userId);
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put(`/users/${userId}`)
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Jane Doe');
    expect(res.body.email).toEqual('jane@example.com');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete(`/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('User deleted successfully');
  });

  
});
