export class Tool {
  type: string;
  config: any;

  constructor(type: string, config: any) {
    this.type = type;
    this.config = config;
  }
}
