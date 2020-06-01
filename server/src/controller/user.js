/* eslint-disable no-unused-vars */
const { handle_success, handle_error } = require('../respone');
var bcrypt = require('bcryptjs');
const User = require('../model/user');

module.exports.create = async (req, res, next) => {
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;

  await User.findOne({ email: email }, (err, user) => {
    if (err) return handle_error(res, 'Lỗi tìm tài khoản');
    else if (user) return handle_error(res, 'Đã tồn tại tài khoản');
  });

  let passwordHash = bcrypt.hashSync(password, 10);

  let user = new User({
    email: email,
    name: name,
    password: passwordHash
  });

  try {
    await user.save();
    handle_success(res, 'Tạo tài khoản thành công', user);
  } catch (error) {
    handle_error(res, 'Lỗi save user');
  }
};


module.exports.login = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  await User.findOne({ email: email }, (err, user) => {
    if (err) return handle_error(res, 'Lỗi ở tìm user');
    else if (!user) return handle_error(res, 'Bạn chưa đăng ký !');
    else {
      try {
        if (bcrypt.compareSync(password, user.password)) {
          // eslint-disable-next-line no-undef
          return handle_success(res, 'Đăng nhập thành công', users);
        } else {
          return handle_error(res, 'Nhầm mật khẩu');
        }
      } catch(error){
        return handle_error(res, error.message);
      }
    }
  });

};