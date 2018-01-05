const request = require('supertest');
const { probot } = require('.');

describe('Integration: frontend', () => {
  test('/', async () => {
    const res = await request(probot.server).get('/');

    expect(res.status).toBe(200);
    expect(res.text).toMatchSnapshot();
  });

  test('/denied', async () => {
    const res = await request(probot.server).get('/denied');

    expect(res.status).toBe(200);
    expect(res.text).toMatchSnapshot();
  });
});
