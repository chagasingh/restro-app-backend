const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
const sequelize = require('./util/database');


app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user')
app.use(bodyParser.urlencoded({extended:true}));

//show all the routes of one page
app.use(userRoutes)


sequelize
  .sync({alter:true})
  .then(result => {
    //console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
