const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const cat = await Cat.create(req.body);
      res.send(cat);
    }
    catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const cat = await Cat.update(req.params.id, req.body);
      res.send(cat);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const cat = await Cat.getById(req.params.id);
      res.json(cat);
    }
    catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const cats = await Cat.getAll();
      res.json(cats);
    }
    catch (err) {
      next(err);
    }
  });
    
