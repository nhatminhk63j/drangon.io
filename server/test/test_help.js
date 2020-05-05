/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const config = require('../config');
//tell mongoose to use es6 implementation of promises

mongoose.Promise = global.Promise;

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once('open', () => console.log('Connected!'))
  .on('error', (error) => {
    console.warn('Error : ', error);
  });

var beforeEach = (async(done) => {
  mongoose.connection.collections.mfaps.drop(() => {
    console.log('test');
    done(); //go ahead everything is done now.
  });
});
