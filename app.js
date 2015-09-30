
var multer = require('multer')
var handleUpload = multer({
  dest: __dirname + '/_uploads',
  limits: {
    fileSize: 100
  }
}).fields([
  { name: 'file', maxCount: 1 }
])

var app = require('express')()

app.post('/contact', function (req, res, next) {
  handleUpload(req, res, function (err) {
    if (err && err.code == 'LIMIT_FILE_SIZE') {
      res.status(400).send({
        "message": "Bad request: file too large",
        "name": "Bad Request"
      })
      return;
    } else if (err) {
      return next(err);
    }
    res.send('ok')
  })
})

module.exports = app
