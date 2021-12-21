import { JsonProperty } from 'json-object-mapper';

import { UserToken } from './userToken';

export class SignInResponse {
  @JsonProperty()
  userToken: UserToken;

  constructor() {
    this.userToken = new UserToken();
  }
}
