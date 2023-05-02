// Imports
const {Advert, Location_Advert} = require("./../models/Advert")
const { QueryTypes } = require('sequelize');
const sequelize = require("../../db/index")
const multer = require('multer');
const path = require('path')



const getAllAdverts =  async (req, res) => {
  try{
    const ads = await sequelize.query(
      ` SELECT "a"."id", "a"."title", "a"."from", "a"."to", "a"."periode", "a"."media",
        Count("L"."LocationId") as "locations"
        FROM public."Adverts" as "a"
        left Join  public."Location_Adverts" as "L"
        ON "a"."id" = "L"."AdvertId"
        GROUP BY "a"."id"; `,
      {type: QueryTypes.SELECT}
    );
    res.status(200).send({success : true, data : ads})
  }catch(error)
  {
    res.status(400).send({success : false, message : error.message})
  }
  
};

const getAdvertById =  async (req, res) => {
  try{
    const user = await Advert.findByPk(req.params.id);
    res.status(200).send({success : true, data : user})
  }catch(error)
  {
    res.status(400).send({success : false, message : error.name})
  }
};

const addNewAdvert =  async (req, res) => {
  try{
    const mediaFile = req.media;
    // console.log(req.from, req.data);
    const date = Date.now()

    // let locations = req.body.locations

    // const data = await Advert.create(body)

    // for(id in locations) {
    //   console.log(locations[id]);
    //   await Location_Advert.create({LocationId : locations[id], AdvertId : data.id})
    // }

  //   // Insert media

    const storage = multer.diskStorage ({
      destination : (req, file, cb) =>{
          cb(null, 'C:/Users/HP/Desktop/STARTUP/FIE/Prototype/Backend/src/uploads')
      },
      filename : (req, file, cb) =>{
        let mediaName = "media-"+ date + path.extname(file.originalname)
          cb(null, mediaName)
      }
    })
    
    const upload = multer({ storage : storage }).single('media')
   
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // Handle Multer errors here
        console.log(err)
      } else if (err) {
        console.log(err)
        // Handle other errors here
      } 
    });
    
    res.status(201).send({success : true, data : date})

  }catch(error){
    
    res.status(400).send({success : false, message : error.message})
    console.log(error.message);
  }
};

const updateAdvert =  async (req, res) => {
  try{
    const  data  = await Advert.update(req.body, { where: {id: req.params.id } });
    const userUpdated = await Advert.findByPk(req.params.id);
    res.status(204).send({success : true, data : userUpdated})
  }catch(error)
  {
    res.status(400).send({success : false, message : error.name})
  }
};

const deleteAdvert =  async (req, res) => {
  try{
    await Advert.destroy({
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



module.exports = { getAllAdverts, getAdvertById, addNewAdvert, updateAdvert, deleteAdvert }