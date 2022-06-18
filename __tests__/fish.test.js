const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('fish routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('gets all fish', async () => {
    const res = await request(app).get('/fishes');
    const expected = [
      { 'color': 'Blue', 'id': 1, 'name': 'Nemo', 'weight': 10 }, 
      { 'color': 'Green', 'id': 2, 'name': 'Dory', 'weight': 20 }, 
      { 'color': 'Orange', 'id': 3, 'name': 'Marlin', 'weight': 30 }
    ];
    expect(res.body).toEqual(expected);
  });

  it('gets a single fish', async () => {
    const res = await request(app).get('/fishes/1');
    const expected = { 'color': 'Blue', 'id': 1, 'name': 'Nemo', 'weight': 10 };
    expect(res.body).toEqual(expected);
  });

  it('creates a fish', async () => {
    const res = await request(app)
      .post('/fishes')
      .send({ name: 'Steve', color: 'Green', weight: 200 });
    expect(res.body).toEqual({ name: 'Steve', color: 'Green', weight: 200, id: 4 });
  });

  it('updates a fish', async () => {
    const res = await request(app)
      .put('/fishes/1')
      .send({ name: 'Nemo', color: 'Green', weight: 10 });
    expect(res.body).toEqual({ name: 'Nemo', color: 'Green', weight: 10, id: 1 });
  });

  it('deletes a fish', async () => {
    const res = await request(app).delete('/fishes/1');
    expect(res.text).toEqual('Deleted fish with id 1');
  }
  );
  afterAll(() => {
    pool.end();
  });
});
