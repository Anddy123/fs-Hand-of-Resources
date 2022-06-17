const pool = require('../utils/pool');

module.exports = class Fish {
  id;
  name;
  color;
  weight;

  constructor({ id, name, color, weight }) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.weight = weight;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM fishes');
    return rows.map(fish => new Fish(fish));
  }

};
