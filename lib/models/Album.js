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
};
