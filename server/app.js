/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const path = require('path');
const morgan = require('morgan');
const game_router = express.Router();
const game_controller = require('./src/controller/game');

const user_router = express.Router();
const user_controller = require('./src/controller/user');

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
var db = mongoose.connection;

db.once('open', function () {
  console.log('connected mongodb');
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => res.send('Dragon Learn'));
//Image wtfattp 
app.use('/image/wtfattp', express.static(path.join(__dirname, '/image/wtfattp')));
app.use('/image/mfap', express.static(path.join(__dirname, '/image/mfap')));

///Game
app.use('/game', game_router);
/// Write the fraction according to the picture
game_router.post('/wtfattp/create_data', game_controller.create_wtfattp_data);
game_router.get('/wtfattp', game_controller.wtfattp);
/// Matching Figures And Pictures
game_router.post('/mfap/create_data', game_controller.create_mfap_data);
game_router.get('/mfap', game_controller.mfap);

///User
app.use('/user', user_router);
user_router.post('/create', user_controller.create);
user_router.get('/login', user_controller.login);



app.use(function (err, req, res, next) {
  // console.log(err);
  if (err.name == 'MongoError' && err.code == 11000) {
    res.status(409);
    return res.send({
      status: 'error',
      message: 'Trùng lặp dữ liệu'
    });
  }
});

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`));
module.exports = app;