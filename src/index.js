'use strict'

exports.redirect = (event, context, callback) => {
  callback(null, {
    statusCode: 302,
    headers: {
      Location: 'https://bulyshko.com'
    }
  })
}
