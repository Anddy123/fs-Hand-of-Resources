const pool = require('../utils/pool');

module.exports = class Game {
  id;
  name;
  genre;
  price;

  constructor({ id, name, genre, price }) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.price = price;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM games');
    return rows.map(game => new Game(game));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM games WHERE id = $1', [id]);
    return new Game(rows[0]);
  }

  static async create({ name, price, genre }) {
    const { rows } = await pool.query('INSERT INTO games (name, price, genre) VALUES ($1, $2, $3) RETURNING *', [name, price, genre]);
    return new Game(rows[0]);
  }

  static async update(id, { name, price, genre }) {
    const { rows } = await pool.query('UPDATE games SET name = $1, price = $2, genre = $3 WHERE id = $4 RETURNING *', [name, price, genre, id]);
    return new Game(rows[0]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM games WHERE id = $1', [id]);
    return 'Deleted game ' + id;
  }
};
