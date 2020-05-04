/* eslint-disable no-unused-vars */
const { handleSuccess, handleError } = require('../respone');
var bcrypt = require('bcryptjs');
const User = require('../model/user');

module.exports.create = async (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  await User.findOne({ email: email }, (err, user) => {
    if (err) return handleError(res, 'Lỗi tìm tài khoản');
    else if (user) return handleError(res, 'Đã tồn tại tài khoản');
  });

  const passwordHash = bcrypt.hashSync(password, 10);

  const user = new User({
    email: email,
    name: name,
    password: passwordHash
  });

  try {
    await user.save();
    handleSuccess(res, 'Tạo tài khoản thành công', user);
  } catch (error) {
    handleError(res, 'Lỗi save user');
  }
};

module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  await User.findOne({ email: email }, (err, user) => {
    if (err) return handleError(res, 'Lỗi ở tìm user');
    else if (!user) return handleError(res, 'Bạn chưa đăng ký !');
    else {
      try {
        if (bcrypt.compareSync(password, user.password)) {
          return handleSuccess(res, 'Đăng nhập thành công');
        } else {
          return handleError(res, 'Nhầm mật khẩu');
        }
      } catch (error) {
        return handleError(res, error.message);
      }
    }
  });
};
