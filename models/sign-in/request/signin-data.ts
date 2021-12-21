import { JsonProperty } from 'json-object-mapper';
import 'reflect-metadata';

import { DeviceInfo } from './deviceinfo';

export class SignInData {
  @JsonProperty()
  deviceInfo: DeviceInfo;
  @JsonProperty()
  email: string;
  @JsonProperty()
  password: string;

  constructor( ) {
    this.deviceInfo = new DeviceInfo();
    this.email = undefined;
    this.password = undefined;
  }
}
