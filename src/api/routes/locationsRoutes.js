const express = require("express");
const { getAllLocations, getLocationById, addNewLocation, updateLocation, deleteLocation } = require("../controllers/locationController");
const router = express.Router();

//retouner toutes les bacs
router.get("/", getAllLocations)

//retourner un bac depuis son id
router.get("/:id", getLocationById)
 
//ajouter un nouveau bac
router.post("/", addNewLocation)

//modifier un bac depuis son id
router.put("/:id", updateLocation)

//suprimmer un bac
router.delete("/:id", deleteLocation)

module.exports = router;