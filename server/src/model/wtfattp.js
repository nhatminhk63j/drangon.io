const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var wtfattp_data = new Schema ({
    path: { type: String, required: true },
    ts: { type: Number, required: true },
    ms: { type: Number, required: true }
});


var WtfattpData = mongoose.model('WtfattpData', wtfattp_data);
module.exports = WtfattpData; 