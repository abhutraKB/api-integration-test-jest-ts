import { JsonProperty } from 'json-object-mapper';

export class UserToken {
  @JsonProperty()
  token: string;

  constructor() {
    this.token = undefined;
  }
}
