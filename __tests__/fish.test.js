const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
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
  
  afterAll(() => {
    pool.end();
  });
});
