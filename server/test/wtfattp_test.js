/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
process.env.NODE_ENV = 'test';
const WtfattpModel = require('../src/model/wtfattp');


describe('Write the fraction according to the picture', function () {
  it('Create data', async () => {
    let obj = {
      ts: Math.floor(Math.random() * 10),
      ms: Math.floor(Math.random() * 10),
      path: 'test path'
    };
    let data = new WtfattpModel({ ts: obj.ts, ms: obj.ms, path: obj.path });
    await data.save();
    await WtfattpModel.findOne({ ts: obj.ts, ms: obj.ms, path: obj.path }, async (err, doc) => {
      if (err || !doc) throw Error('Error create data');
      else {
        await WtfattpModel.deleteOne({ _id: doc._id }).exec();
      }
    });
  });


  it('Create 2 same data from api', async () => {
    let obj = {
      ts: Math.floor(Math.random() * 10),
      ms: Math.floor(Math.random() * 10),
      path: 'test path'
    };
    let data = new WtfattpModel({ ts: obj.ts, ms: obj.ms, path: obj.path });
    await data.save();
    await WtfattpModel.findOne({ ts: obj.ts, ms: obj.ms, path: obj.path }, async (err, doc) => {
      if (err || !doc) throw Error('Error create data');
      else {
        let new_data = new WtfattpModel({ ts: obj.ts, ms: obj.ms, path: obj.path });
        await new_data.save({}, async (err, product) => {
          if (err) {
            await WtfattpModel.deleteOne({ _id: doc._id }).exec();
          }
          if (product) throw Error('Error test 2');
        });
      }
    });
  });
  it('Get game data', async () => {
    let data = await WtfattpModel.aggregate([
      { $sample: { size: 5 } },
      {
        $project: {
          link: { $concat: ['http://localhost:3001', '$path'] },
          ts: true,
          ms: true,
          _id: false
        }
      }
    ]);
    if (data.length != 5 || !data[0].link || !data[0].ts || !data[0].ms) {
      throw Error('Error get game data');
    }
    
  });
});