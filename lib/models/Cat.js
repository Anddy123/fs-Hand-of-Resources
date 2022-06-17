const pool = require('../utils/pool');
module.exports = class Cat {
  id;
  name;
  color;
  type;

  constructor({ id, name, color, type }) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.type = type;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cats');
    return rows.map(cat => new Cat(cat));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id = $1', [id]);
    return new Cat(rows[0]);
  }

};
