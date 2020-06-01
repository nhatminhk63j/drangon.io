const { handle_success } = require('../respone');
const WtfattpModel = require('../model/wtfattp');
const MfapModel = require('../model/mfap');

module.exports.create_wtfattp_data = async (req, res, next) => {
  try {
    let body = req.body;
    let data = new WtfattpModel(body);
    await data.save();
    res.status(201);
    handle_success(res, 'Tạo dữ liệu game thành công', data);
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
    handle_success(res, 'Lấy dữ liệu game thành công', data);
  } catch (error) {
    next(error);
  }
};

module.exports.create_mfap_data = async (req, res, next) => {
  try {
    let body = req.body;
    let data = new MfapModel(body);
    await data.save();
    handle_success(res, 'Tạo dữ liệu game thành công', data);
  } catch (error) {
    next(error);
  }
};


module.exports.mfap = async (req, res, next) => {
  try {
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
      let data = {
        ts: temp[i].ts,
        ms: temp[i].ms,
        numberTrue: 0,
        data: []
      };
      for (let j = i; j < i + 4; j++) {
        data.data.push(temp[j]);
        if (temp[j].ts == data.ts && temp[j].ms == data.ms) {
          data.numberTrue++;
        }
      }
      result.push(data);
    }

    return res.send({
      status: 'success',
      message: 'Lấy dữ liệu game thành công',
      result: result,
    });
  } catch (error) {
    next(error);
  }
};