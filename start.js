require('dotenv').config();

/* database */
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err}`);
  });

/* express app */
require('./models/Registration');
const app = require("./app");
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
