import { JsonProperty } from 'json-object-mapper';
import 'reflect-metadata';

export class SignUpData {
  @JsonProperty()
  countryCode: string;
  @JsonProperty()
  email: string;
  @JsonProperty()
  partnerCode: string;
  @JsonProperty()
  password: string;
  @JsonProperty()
  phone: string;
  @JsonProperty()
  source: string;
  @JsonProperty()
  userName: string;
  @JsonProperty()
  ipAddress: string;
  @JsonProperty()
  subscriptionVersion: string;

  constructor() {
    this.countryCode = undefined;
    this.email = undefined;
    this.ipAddress = undefined;
    this.partnerCode = undefined;
    this.password = undefined;
    this.phone = undefined;
    this.source = undefined;
    this.subscriptionVersion = undefined;
    this.userName = undefined;
  }
}
