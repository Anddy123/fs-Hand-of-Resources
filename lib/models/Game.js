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
};
