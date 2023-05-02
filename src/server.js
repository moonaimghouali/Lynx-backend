//modules imports
require("dotenv").config()
const morgan = require("morgan")
const express = require("express")
const sequelize = require("./db/index")
const cors = require("cors")
const path = require('path')

//app initialization
const app = express()
app.use(morgan("dev")) // logging middleware
app.use(express.json()) // middleware for handeling json data
app.use(cors({
  origin: '*'
}));

app.use('/media', express.static(path.join(__dirname, 'uploads')))

// routes
const advertsRoutes = require("./api/routes/advertsRoutes")
const locationsRoutes = require("./api/routes/locationsRoutes")

//routes configurations
app.use("/api/ads", advertsRoutes)
app.use("/api/locations", locationsRoutes)

// to sync changes in database
app.get('/sync', function (req, res) {
  sequelize.sync({force: true}).success(function() {
      console.log('sync done');
      res.send(200, 'sync done');
  }).error(function(error) {
      console.log('there was a problem');
      res.send(200, 'there was a problem');
  });
})

//port number
const port = process.env.SERVER_PORT || 5000;

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();

  sequelize.sync()
  .then(() => {
    console.log('Database tables have been synced successfully.');
    app.listen(port, ()=>{
      console.log(`Server is up and running on port ${port}`)
  })
  })
  .catch((error) => {
    console.error('Error syncing database tables:', error);
  });


