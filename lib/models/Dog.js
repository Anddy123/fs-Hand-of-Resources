const pool = require('../utils/pool');

module.exports = class Dog {
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
    const { rows } = await pool.query('SELECT * FROM dogs');
    return rows.map(dog => new Dog(dog));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM dogs WHERE id = $1', [id]);
    return new Dog(rows[0]);
  }

};
