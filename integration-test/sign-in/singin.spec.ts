const supertest = require('supertest')
const request = supertest('https://api.bizanalyst.in/user')

import { SignInObject } from '../../models/sign-in/request/signin-object'
import { SignInResponse } from '../../models/sign-in/response/signin-response'
describe('Signup test', () => {
  it('Get the token', async () => {
    const singIn = new SignInObject()
    const singInData = singIn.createSignInObject(
      'ashish.bhutra@khatabook.com',
      'Ashish@09'
    )
    console.log('start')
    console.log(`${JSON.stringify(singInData)}`)
    await request
      .post('/signin')
      .set('Content-Type', 'application/json')
      .send(singInData)
      .expect(200)
      .then((res: any) => {
        const data: SignInResponse = res.body
        console.log(JSON.stringify(data.userToken.token))
      })
  })
})
