const Cars = require('./cars-model')

const vinValidator = require('vin-validator');


const checkCarId =  async (req, res, next) => {
  try{
    const car = await Cars.getById(req.params.id)
    if(!car){
      return res.status(404).json({
        message: `car with id ${req.params.id} is not found` 
      })
    }else{
      req.car = car
      next()
    }
  }catch(error){
    next(error)
  }
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) {
    return res.status(400).json({ message: "vin is missing" });
  }
  if (!req.body.make) {
    return res.status(400).json({ message: "make is missing" });
  }
  if (!req.body.model) {
    return res.status(400).json({ message: "model is missing" });
  }
  if (!req.body.mileage) {
    return res.status(400).json({ message: "mileage is missing" });
  }
  next();
};



const checkVinNumberValid = (req, res, next) => {
  if(vinValidator.validate(req.body.vin)){
    next();
  }else{
    return res.status(400).json({
      message: `vin ${req.body.vin} is invalid`
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const { vin } = req.body
    const vinExist = await Cars.getByVin(vin);
    if(!vinExist){
      next();
    }else{
      return res.status(400).json({
        message:`vin ${vin} already exists`
      })
    }
  }catch(error){
    next(error);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}