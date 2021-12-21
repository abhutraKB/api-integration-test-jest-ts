const supertest = require('supertest');
const request = supertest('https://api.bizanalyst.in/user');

import * as Faker from 'faker';

import { SignUpObject } from './../../models/sign-up/request/signup-object';

// const email = Faker.internet.email();
const phone = '9999999999';
const countryCode = '+91';
const userName = Faker.name.firstName();

describe('Signup', () => {
  const singUp = new SignUpObject();
  const singUpPayLoadBadData = singUp.createSignupObject('', phone, countryCode, userName);
  // const singUpPayLoad = singUp.createSignupObject(email, phone, countryCode, userName);

  it('Bad request', async () => {
    await request
      .post('/')
      .set('Content-Type',  'application/json')
      .send(singUpPayLoadBadData)
      .expect(400);
  });
});
