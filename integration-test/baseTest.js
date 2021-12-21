const supertest = require('supertest')
const request = supertest('https://api.biz.analyst.in/user')
module.exports = { request }
