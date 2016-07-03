var request = require('request')

module.exports = {
  get: function (url, fn, errorFn) {
    request({
      url: url,
      method: 'GET',
      json: true
    }, function (error, response, body) {
      if (error) {
        console.error({ ajaxcall: 'get' }, error)
        if (errorFn) errorFn(error)
      } else {
        console.log(body)
        fn(body, response)
      }
    })
  },
  post: function (url, data, fn, errorFn) {
    request({
      url: url,
      method: 'POST',
      json: true,
      body: data
    }, function (error, response, body) {
      if (error) {
        console.error({ ajaxcall: 'post' }, error)
        if (errorFn) errorFn(error)
      } else {
        console.log(body)
        fn(body, response)
      }
    })
  }
}
