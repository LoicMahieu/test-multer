
var app = require('../app')
var request = require('supertest')

describe('Do upload', function () {

  it('Should result 400 but got 200', function (done) {
    request(app)
      .post('/contact')
      .attach('file', __dirname + '/test_file.pdf')
      .expect(400, {
        name: 'Bad Request',
        message: 'Bad request: file too large'
      })
      .end(done)
  })

  it('Should result 400 but got 200', function (done) {
    request(app)
      .post('/contact')
      .attach('file', __dirname + '/large.jpg')
      .expect(400, {
        name: 'Bad Request',
        message: 'Bad request: file too large'
      })
      .end(done)
  })

  it('Should result 400 and... got 400', function (done) {
    request(app)
      .post('/contact')
      .attach('file', __filename)
      .expect(400, {
        name: 'Bad Request',
        message: 'Bad request: file too large'
      })
      .end(done)
  })

})
