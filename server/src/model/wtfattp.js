const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var wtfattp_data = new Schema({
  path: { type: String, required: true },
  ts: { type: Number, required: true },
  ms: { type: Number, required: true }
});

wtfattp_data.index({ ts: 1, ms: 1, path: 1 }, { unique: true });

var WtfattpModel = mongoose.model('Wtfattp', wtfattp_data);
module.exports = WtfattpModel; 