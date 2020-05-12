// Handle success here
exports.handleSuccess = async function ( res, message = '', data = '' ) {
  return res.send({
    status: 'success',
    message: message,
    data: data
  });
};

// Handle error here
exports.handleError = async function ( res, message = '' ) {
  return res.send({
    status: 'error',
    message: message
  });
};