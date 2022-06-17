const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const dogs = await Dog.getAll();
      res.json(dogs);
    }
    catch (err) {
      next(err);
    }
  });
