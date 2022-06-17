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

  
  afterAll(() => {
    pool.end();
  });
});
