const { Router } = require('express');
const Album = require('../models/Album');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const album = await Album.create(req.body);
      res.send(album);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const album = await Album.getById(req.params.id);
      res.json(album);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const albums = await Album.getAll();
      res.json(albums);
    }
    catch (err) {
      next(err);
    }
  });
