// DO YOUR MAGIC
const express = require('express');
const { checkCarPayload, 
  checkCarId, 
  checkVinNumberUnique, 
  checkVinNumberValid 
} = require('./cars-middleware');

const Cars = require('./cars-model');

const router = express.Router();

// GET /api/cars
router.get('/', async (req, res, next) => {
  try {
    const cars = await Cars.getAll()
    res.json(cars)
  } catch (error) {
    next(error)
  }
});

// GET /api/cars/:id
router.get('/:id', checkCarId, async (req, res) => {
  res.json(req.car)
  });

// POST /api/cars
router.post('/', 
checkCarPayload, 
checkVinNumberUnique, 
checkVinNumberValid, 
async (req, res, next) => {
  
  try {
    const createdCar = await Cars.create(req.body);
    res.json(createdCar);
  } catch (error) {
    next(error)
  }
});

module.exports = router;


