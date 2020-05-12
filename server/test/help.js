const mongoose = require('mongoose');
const config = require('../config');
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
