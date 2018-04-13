require('dotenv').config()

const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');

const ctrl = require('./controller');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
}).catch( err => console.log(err));

const port = process.env.PORT || 4025;
app.listen(port, () => { console.log(`Ye olde server doth lend an ear at port ${port}, sire!`)});


//Endpoint to retrieve houses from DB
app.get('/api/houses', ctrl.getHouses);

app.post('/api/houses', ctrl.addHouse);



