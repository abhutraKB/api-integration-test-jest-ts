import { JsonProperty } from 'json-object-mapper';
import 'reflect-metadata';

export class DeviceInfo {
  @JsonProperty()
  manufacturer: string;
  @JsonProperty()
  model: string;
  @JsonProperty()
  os: string;

  constructor() {
    this.manufacturer = '';
    this.model = '';
    this.os = '';
  }
}
