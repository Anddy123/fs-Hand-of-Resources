const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('game routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('gets all games', async () => {
    const res = await request(app).get('/games');
    const expected = [
      { 'id': 1, 'name': 'Super Mario', 'genre': 'Platformer', 'price': 50 },
      { 'id': 2, 'name': 'Pokemon', 'genre': 'RPG', 'price': 100 },
      { 'id': 3, 'name': 'Call of Duty', 'genre': 'Shooter', 'price': 150 }
    ];
    expect(res.body).toEqual(expected);
  });


  it('gets a single game', async () => {
    const res = await request(app).get('/games/1');
    const expected = { 'id': 1, 'name': 'Super Mario', 'genre': 'Platformer', 'price': 50 };
    expect(res.body).toEqual(expected);
  });


  it('creates a game', async () => {
    const res = await request(app)
      .post('/games')
      .send({ name: 'Super Mario Bros', genre: 'Platformer', price: 50 });
    expect(res.body).toEqual({ name: 'Super Mario Bros', genre: 'Platformer', price: 50, id: 4 });
  });
  
  afterAll(() => {
    pool.end();
  });
});
