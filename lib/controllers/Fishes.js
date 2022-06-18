const { Router } = require('express');
const Fish = require('../models/Fish');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const fish = await Fish.create(req.body);
      res.send(fish);
    }
    catch (err) {
      next(err);
    }   
  })
  .put('/:id', async (req, res, next) => {
    try {
      const fish = await Fish.update(req.params.id, req.body);
      res.send(fish);
    }
    catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const fish = await Fish.delete(req.params.id);
      res.send(fish);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const fish = await Fish.getById(req.params.id);
      res.json(fish);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const fishes = await Fish.getAll();
      res.json(fishes);
    }
    catch (err) {
      next(err);
    }
  });
