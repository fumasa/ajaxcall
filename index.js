var http = require("http")

module.exports = function (url, fn, error_fn) {
  try {
    var request = http.get(url, function (response) {
      var buffer = ""
      var data
      var route

      response.on("data", function (chunk) {
        buffer += chunk
      })

      response.on("end", function (err) {
        data = JSON.parse(buffer)
        fn(data)
      })
    })
  } catch (err) {
    error_fn(err)
  }
}