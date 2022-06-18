const pool = require('../utils/pool');

module.exports = class Album {
  id;
  name;
  artist;
  year;

  constructor({ id, name, artist, year }) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.year = year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM albums');
    return rows.map(album => new Album(album));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM albums WHERE id = $1', [id]);
    return new Album(rows[0]);
  }

  static async create({ name, artist, year }) {
    const { rows } = await pool.query('INSERT INTO albums (name, artist, year) VALUES ($1, $2, $3) RETURNING *', [name, artist, year]);
    return new Album(rows[0]);
  }

  static async update(id, { name, artist, year }) {
    const { rows } = await pool.query('UPDATE albums SET name = $1, artist = $2, year = $3 WHERE id = $4 RETURNING *', [name, artist, year, id]);
    return new Album(rows[0]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM albums WHERE id = $1', [id]);
    return 'Deleted album ' + id;
  }
};
