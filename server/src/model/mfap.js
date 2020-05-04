const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mfapdata = new Schema({
  path: { type: String, required: true },
  ts: { type: Number, required: true },
  ms: { type: Number, required: true },
});

mfapdata.index({ ts: 1, ms: 1, path: 1 }, { unique: true });

var MfapModel = mongoose.model('Mfap', mfapdata);
module.exports = MfapModel; 