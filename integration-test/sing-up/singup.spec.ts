const req = require('../baseTest')
const testObject = require('../../test-data/user.json')

import { SignUpData } from '../../models/sign-up/request/signup-data'

describe('Signup', () => {
  it.each(testObject)('Sign up test', (signupData: any) => {
    const inputData: SignUpData = signupData.input
    req.request
      .post('/')
      .set('Content-Type', 'application/json')
      .send(inputData)
      .expect(signupData.response)
      .then((res: any) => {
        console.log(JSON.stringify(res.status))
      })
  })
})
