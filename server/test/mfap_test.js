/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const assert = require('assert');
const MfapModel = require('../src/model/mfap'); //imports the Pokemon model.

function iThrowError() {
  throw new Error('Error thrown');
}


const obj = {
  ts: Math.floor(Math.random() * 10),
  ms: Math.floor(Math.random() * 10),
  path: 'test path'
};


describe('Creating documents', () => {
  it('creates a Mfap data', async (done) => {
    var data = new MfapModel(...obj);
    await data.save();
    await MfapModel.findOne(...obj, (data, err) => {
      if (data) done();
      else assert.throws(iThrowError(), Error, 'Không tìm thấy data');
    });
  });
});

describe('Test conflict file', () => {
  it('creates a dulicate data alaway return error', (done) => {
    var data = new MfapModel(...obj);
    data.save().then((error) => {
      done();
    });
  });
});