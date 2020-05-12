/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const MfapModel = require('../src/model/mfap');


describe('Matching Figures And Pictures', function () {
  it('Create data', async () => {
    let obj = {
      ts: Math.floor(Math.random() * 10),
      ms: Math.floor(Math.random() * 10),
      path: 'test path'
    };
    let data = new MfapModel({ ts: obj.ts, ms: obj.ms, path: obj.path });
    await data.save();
    await MfapModel.findOne({ ts: obj.ts, ms: obj.ms, path: obj.path }, async (err, doc) => {
      if (err || !doc) throw Error('Error create data');
      else {
        await MfapModel.deleteOne({ _id: doc._id }).exec();
      }
    });
  });


  it('Create 2 same data from api', async () => {
    let obj = {
      ts: Math.floor(Math.random() * 10),
      ms: Math.floor(Math.random() * 10),
      path: 'test path'
    };
    let data = new MfapModel({ ts: obj.ts, ms: obj.ms, path: obj.path });
    await data.save();
    await MfapModel.findOne({ ts: obj.ts, ms: obj.ms, path: obj.path }, async (err, doc) => {
      if (err || !doc) throw Error('Error create data');
      else {
        let new_data = new MfapModel({ ts: obj.ts, ms: obj.ms, path: obj.path });
        await new_data.save({}, async (err, product) => {
          if (err) {
            await MfapModel.deleteOne({ _id: doc._id }).exec();
          }
          if (product) throw Error('Error test 2');
        });
      }
    });
  });
  it('Get game data', async () => {
    let temp = await MfapModel.aggregate([
      { $sample: { size: 8 } },
      {
        $project: {
          link: { $concat: ['http://localhost:3001', '$path'] },
          ts: true,
          ms: true,
          _id: false
        }
      }
    ]);
    var result = [];
    for (var i = 0; i < 8; i = i + 4) {
      let object = new Object({
        ts: temp[i].ts,
        ms: temp[i].ms,
        numberTrue: 0,
        data: []
      });
      for (let j = i; j < i + 4; j++) {
        object.data.push(temp[j]);
        if (temp[j].ts == object.ts && temp[j].ms == object.ms) {
          object.numberTrue++;
        }
      }
      result.push(object);
    }
  });
});