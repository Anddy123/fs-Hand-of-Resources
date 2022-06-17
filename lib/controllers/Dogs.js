const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const dog = await Dog.getById(req.params.id);
      res.json(dog);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const dogs = await Dog.getAll();
      res.json(dogs);
    }
    catch (err) {
      next(err);
    }
  });
