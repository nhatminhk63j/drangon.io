const { handleSuccess, handleError } = require('../respone');
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
        let data = await MfapModel.aggregate([
            { $sample: { size: 4 } },
            {
                $project: {
                    link: { $concat: ['http://localhost:3001', '$path'] },
                    ts: true,
                    ms: true,
                    _id: false
                }
            }
        ]);

        var rand = Math.floor(Math.random() * 4);
        var result = [];

        for (const element of data) {
            if (element.ts == data[rand].ts && element.ms == data[rand].ms) {
                result.push(element);
            }
        }

        handleSuccess(res, 'Lấy game data thành công', { all: data, result: result });
    } catch (error) {
        console.log(error);
        next(error);
    }
}