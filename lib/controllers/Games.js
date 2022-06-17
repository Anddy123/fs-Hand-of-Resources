const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const game = await Game.create(req.body);
      res.send(game);
    }
    catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const game = await Game.update(req.params.id, req.body);
      res.send(game);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const game = await Game.getById(req.params.id);
      res.json(game);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const games = await Game.getAll();
      res.json(games);
    }
    catch (err) {
      next(err);
    }
  });
