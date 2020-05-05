const { handleSuccess } = require('../respone');
const WtfattpModel = require('../model/wtfattp');
const MfapModel = require('../model/mfap');

module.exports.create_wtfattp_data = async (req, res, next) => {
  try {
    let body = req.body;
    let data = new WtfattpModel(body);
    await data.save();
    handleSuccess(res, 'Tạo game data thành công', data);
  } catch (error) {
    next(error);
  }
};

module.exports.wtfattp = async (req, res, next) => {
  try {
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
    handleSuccess(res, 'Lấy game data thành công', data);
  } catch (error) {
    next(error);
  }
};

module.exports.create_mfap_data = async (req, res, next) => {
  try {
    let body = req.body;
    let data = new MfapModel(body);
    await data.save();
    handleSuccess(res, 'Tạo game data thành công', data);
  } catch (error) {
    next(error);
  }
};


module.exports.mfap = async (req, res, next) => {
  try {
    //// Note : size đợi data
    let temp = await MfapModel.aggregate([
      { $sample: { size: 20 } },
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

    console.log(result);
    handleSuccess(res, 'Lấy game data thành công', result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};