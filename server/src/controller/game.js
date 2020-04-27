const { handleSuccess, handleError } = require('../respone');
const WtfattpData = require('../model/wtfattp');

module.exports.create_wtfattp_data = async (req, res, next) => {
    try {
        let body = req.body;
        let data = new WtfattpData(body);
        await data.save();
        handleSuccess(res, 'Tạo game data thành công', data);
    } catch (error) {
        next(error);
    }
};

module.exports.wtfattp = async (req, res, next) => {
    try {
        let data = await WtfattpData.aggregate([
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