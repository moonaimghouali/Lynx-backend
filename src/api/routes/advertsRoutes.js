const express = require("express");
const { getAllAdverts, getAdvertById, addNewAdvert, updateAdvert, deleteAdvert } = require("../controllers/advertsController");
const router = express.Router();
const bodyParser = require("body-parser");





// const upload = multer({ dest: 'uploads/' });

//retouner toutes les bacs
router.get("/", bodyParser.json(), getAllAdverts)

//retourner un bac depuis son id
router.get("/:id", getAdvertById)
 
//ajouter un nouveau bac
router.post("/",  addNewAdvert)

//modifier un bac depuis son id
router.put("/:id", updateAdvert)

//suprimmer un bac
router.delete("/:id", deleteAdvert)

module.exports = router;