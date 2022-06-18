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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM fishes WHERE id = $1', [id]);
    return new Fish(rows[0]);
  }

  static async create({ name, color, weight }) {
    const { rows } = await pool.query('INSERT INTO fishes (name, color, weight) VALUES ($1, $2, $3) RETURNING *', [name, color, weight]);
    return new Fish(rows[0]);
  }

  static async update(id, { name, color, weight }) {
    const { rows } = await pool.query('UPDATE fishes SET name = $1, color = $2, weight = $3 WHERE id = $4 RETURNING *', [name, color, weight, id]);
    return new Fish(rows[0]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM fishes WHERE id = $1 RETURNING *', [id]);
    return `Deleted fish with id ${id}`;
  }

};
