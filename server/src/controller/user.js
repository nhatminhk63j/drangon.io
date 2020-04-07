const { handleSuccess, handleError } = require('../respone');
const User = require('../model/user');

module.exports.create = async ( req, res ) => {
    let body = req.body;
    let user = new User(body);
    try {
        await user.save();
        handleSuccess( res, 'Tạo tài khoản thành công', user );
    } catch(error) {
        handleError( res , error.message );
    }
};


module.exports.login = async ( req, res ) => {
    let body = req.body;
    let user = await User.findOne({
        name: body.name,
        password: body.password
    });
    if(user) {
        handleSuccess(res, 'Đăng nhập thành công', user);
    } else {
        handleError(res, 'Sai tài khoản hoặc mật khẩu');
    }
};