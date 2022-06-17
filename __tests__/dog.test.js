const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('dog routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('gets all dogs', async () => {
    const res = await request(app).get('/dogs');
    const expected = [{ 'color': 'Black', 'id': 1, 'name': 'Rex', 'type': 'Dog' },
      { 'color': 'White', 'id': 2, 'name': 'Spot', 'type': 'Dog' },
      { 'color': 'Black', 'id': 3, 'name': 'Scooby Doo', 'type': 'Dog' }
    ];
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
