const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe(' routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('gets all albums', async () => {
    const res = await request(app).get('/albums');
    const expected = [
      { 'id': 1, 'name': 'The Dark Side of the Moon', 'artist': 'Pink Floyd', 'year': 1973 },
      { 'id': 2, 'name': 'The Body and the Mind', 'artist': 'Eminem', 'year': 2001 },
      { 'id': 3, 'name': 'The Black Album', 'artist': 'Metallica', 'year': 2004 }
    ];
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
