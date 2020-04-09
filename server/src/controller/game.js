const { handleSuccess, handleError } = require('../respone');
const GameData = require('../model/data');

module.exports.create = async ( req, res ) => {
    let body = req.body;
    let gdata = new GameData(body); 
    try {
        await gdata.save();
        handleSuccess( res, 'Tạo game data thành công', gdata );
    } catch(error) {
        handleError( res, error.message);
    }
};

module.exports.wtfattp = async ( req, res ) => {
    try {
        let gdata = await GameData.find();
        handleSuccess( res, 'Lấy game data thành công', gdata );
    } catch(error) {
        handleError( res, error.message);
    }
};  