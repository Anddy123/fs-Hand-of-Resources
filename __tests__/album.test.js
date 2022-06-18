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

  it('gets one album', async () => {
    const res = await request(app).get('/albums/1');
    const expected = { 'id': 1, 'name': 'The Dark Side of the Moon', 'artist': 'Pink Floyd', 'year': 1973 };
    expect(res.body).toEqual(expected);
  });


  it('creates a new album', async () => {
    const res = await request(app)
      .post('/albums')
      .send({
        name: 'New new',
        artist: 'Eminem',
        year: 2004
      });
    expect(res.body).toEqual({
      id: 4,
      name: 'New new',
      artist: 'Eminem',
      year: 2004
    });
  });


  it('updates an album', async () => {
    const res = await request(app)
      .put('/albums/1')
      .send({
        name: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        year: 1974 });
    expect(res.body).toEqual({
      id: 1,
      name: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      year: 1974
    });
  });


  it('deletes an album', async () => {
    const res = await request(app).delete('/albums/1');
    expect(res.text).toEqual('Deleted album 1');
  });

  afterAll(() => {
    pool.end();
  });
});
