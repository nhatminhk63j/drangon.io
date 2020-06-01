// Handle success here
exports.handle_success = async function ( res, message = '', data = '' ) {
  return res.send({
    status: 'success',
    message: message,
    data: data
  });
};

// Handle error here
exports. = async function ( res, message = '' ) {
  return res.send({
    status: 'error',
    message: message
  });
};