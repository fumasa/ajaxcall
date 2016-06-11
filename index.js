var request = require("request")

module.exports = {
  get: function (url, fn, error_fn) {
    request({
        url: url,
        method: 'GET',
        json: true
      }, function (error, response, body){
        if (error) {
          console.error({ ajaxcall: 'get' }, error)
          if (error_fn) error_fn(error)
        } else {
          console.debug(body)
          fn(body, response)
        }
      })
  },
  post: function (url, data, fn, error_fn) {
    request({
        url: url,
        method: 'POST',
        json: true,
        body: data
      }, function (error, response, body){
        if (error) {
          console.error({ ajaxcall: 'post' }, error)
          if (error_fn) error_fn(error)
        } else {
          console.debug(body)
          fn(body, response)
        }
      })
  }
}