import { CommonUtils } from '../../../helpers/common-utils';

import { SignUpData } from './signup-data';

export class SignUpObject {

  private singUpObj: SignUpData;

  constructor() {
    this.singUpObj = new SignUpData();
  }

  createSignupObject(email: string, phone: string, countryCode = '+91', username: string) {
    this.singUpObj.countryCode = countryCode;
    this.singUpObj.email = email;
    this.singUpObj.ipAddress = '192.168.1.1';
    this.singUpObj.partnerCode = 'DIPU09';
    this.singUpObj.password = '11111111';
    this.singUpObj.phone = phone;
    this.singUpObj.source = '';
    this.singUpObj.subscriptionVersion = 'Trial';
    this.singUpObj.userName = username;

    return CommonUtils.getCleanObject(this.singUpObj);
  }
}
