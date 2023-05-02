// Imports
const Location = require("./../models/Location")


const getAllLocations =  async (req, res) => {
  try{
    const users = await Location.findAll()
    res.status(200).send({success : true, data : users})
  }catch(error)
  {
    res.status(400).send({success : false, message : error.name})
  }
  
};

const getLocationById =  async (req, res) => {
  try{
    const user = await Location.findByPk(req.params.id);
    res.status(200).send({success : true, data : user})
  }catch(error)
  {
    res.status(400).send({success : false, message : error.name})
  }
};

const addNewLocation =  async (req, res) => {
  try{
    console.log(req.body);
    const data = await Location.create(req.body)
    res.status(201).send({success : true, data : data})
  }catch(error)
  {
    console.log(error);
    res.status(400).send({success : false, message : error.name})
  }
};

const updateLocation =  async (req, res) => {
  try{
    const  data  = await Location.update(req.body, { where: {id: req.params.id } });
    const userUpdated = await Location.findByPk(req.params.id);
    res.status(204).send({success : true, data : userUpdated})
  }catch(error)
  {
    res.status(400).send({success : false, message : error.name})
  }
};

const deleteLocation =  async (req, res) => {
  try{
    await Location.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(204).send({success : true, message : "Deleted Successfully!"})
  }catch(error)
  {
    res.status(400).send({success : false, message : error.name})
  }
};



module.exports = { getAllLocations, getLocationById, addNewLocation, updateLocation, deleteLocation }