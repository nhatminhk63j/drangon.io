const express = require("express");
const mongoose = require("mongoose");
const port = 3001;
const MONGO_URI = 'mongodb+srv://admin:admin@dragonlearncluster-9aoa7.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.once('open', function () {
  console.log('connected mongodb');
}); 

app.get("/", (req, res) => res.send("Dragon Learn"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));