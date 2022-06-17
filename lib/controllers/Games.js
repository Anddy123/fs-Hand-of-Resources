const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const games = await Game.getAll();
      res.json(games);
    }
    catch (err) {
      next(err);
    }
  });
