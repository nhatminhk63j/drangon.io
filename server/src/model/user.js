const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var user_schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

user_schema.index({ email: 1, name: 1 }, { unique: 1 })
// user_schema.index({ email: 1 }, { unique: 1 });

user_schema.post('save', function (error, user, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    error.message = `Đã tồn tại tài khoản với tên: ${user.name}`;
    throw error;
  }
  next();
});


var User = mongoose.model('User', user_schema);
module.exports = User;