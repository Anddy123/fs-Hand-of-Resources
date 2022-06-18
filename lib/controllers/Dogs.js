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
  .put('/:id', async (req, res, next) => {
    try {
      const dog = await Dog.update(req.params.id, req.body);
      res.send(dog);
    }
    catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      await Dog.delete(req.params.id);
      res.send(`Deleted dog with id ${req.params.id}`);
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
