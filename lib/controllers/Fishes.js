const { Router } = require('express');
const Fish = require('../models/Fish');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const fishes = await Fish.getAll();
      res.json(fishes);
    }
    catch (err) {
      next(err);
    }
  });
