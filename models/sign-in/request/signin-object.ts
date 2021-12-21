import { CommonUtils } from '../../../helpers/common-utils';

import { DeviceInfo } from './deviceinfo';
import { SignInData } from './signin-data';

export class SignInObject {
  private deviceInfo: DeviceInfo;
  private signInData: SignInData;

  constructor() {
    this.deviceInfo = new DeviceInfo();
    this.signInData = new SignInData();
  }

  createSignInObject( email: string, password: string, manuf = '', model = '', os = '') {
    this.deviceInfo.manufacturer = manuf;
    this.deviceInfo.model = model;
    this.deviceInfo.os = os;
    this.signInData.deviceInfo = this.deviceInfo;
    this.signInData.email = email;
    this.signInData.password = password;

    return CommonUtils.getCleanObject(this.signInData);
  }
}
