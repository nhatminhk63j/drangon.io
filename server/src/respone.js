// Handle success here
exports.handleSuccess = async function (res, message = '', data = '') {
  return res.send({
    code: 'success',
    message: message,
    data: data
  });
};

// Handle error here
exports.handleError = async function (res, message = '') {
  return res.send({
    code: 'error',
    message: message
  });
};
