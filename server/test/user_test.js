/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const User = require('../src/model/user');


describe('User', function () {
  it('Create data', async () => {
    let test_user = {
      email: 'test email',
      name: 'test name',
      password: 'test password'
    };
    let data = new User({ email: test_user.email, name: test_user.name, password: test_user.password });
    await data.save();
    await User.findOne({ email: test_user.email, name: test_user.name, password: test_user.password }, async (err, user) => {
      if (err || !user) throw Error('Error create data');
      else {
        await User.deleteOne({ _id: user._id }).exec();
      }
    });
  });
  it('Create duplicate data', async () => {
    let test_user = {
      email: 'test email',
      name: 'test name',
      password: 'test password'
    };
    let data = new User({ email: test_user.email, name: test_user.name, password: test_user.password });
    await data.save();
    await User.findOne({ email: test_user.email, name: test_user.name, password: test_user.password }, async (err, user) => {
      if (err || !user) throw Error('Error create data');
      else {
        let new_test_user = new User({ email: test_user.email, name: test_user.name, password: 'another test passwoer' });
        new_test_user.save({}, async (err, new_user) => {
          if (err) {
            await User.deleteOne({ _id: user._id }).exec();
          } else if (new_user) {
            throw Error('Error duplicate user');
          }
        });
      }
    });
  });

});