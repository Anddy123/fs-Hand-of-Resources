const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cat routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('gets all cats', async () => {
    const res = await request(app).get('/cats');
    const expected = [
      { 'color': 'Orange', 'id': 1, 'name': 'Garfield', 'type': 'Tiger' },
      { 'color': 'Black', 'id': 2, 'name': 'Felix', 'type': 'Cat' },
      { 'color': 'White', 'id': 3, 'name': 'Tom', 'type': 'Cat' }
    ];
    expect(res.body).toEqual(expected);
  });


  it('gets a single cat', async () => {
    const res = await request(app).get('/cats/1');
    const expected = { 'color': 'Orange', 'id': 1, 'name': 'Garfield', 'type': 'Tiger' };
    expect(res.body).toEqual(expected);
  });


  it('creates a cat', async () => {
    const res = await request(app)
      .post('/cats')
      .send({ name: 'Steve', color: 'Green', type: 'Cat' });
    expect(res.body).toEqual({ name: 'Steve', color: 'Green', type: 'Cat', id: 4 });
  });


  it('updates a cat', async () => {
    const res = await request(app)
      .put('/cats/1')
      .send({ name: 'Garfield', color: 'Green', type: 'Tiger' });
    expect(res.body).toEqual({ name: 'Garfield', color: 'Green', type: 'Tiger', id: 1 });
  });
  
  afterAll(() => {
    pool.end();
  });
});
