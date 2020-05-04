const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var gamedata_schema = new Schema({
  path: { type: String, required: true },
  numerator: { type: Number, required: true },
  denominator: { type: Number, required: true }
});

var GameData = mongoose.model('GameData', gamedata_schema);
module.exports = GameData;
