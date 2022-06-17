const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const dog = await Dog.create(req.body);
      res.send(dog);
    }
    catch (err) {
      next(err);
    }
  })
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
