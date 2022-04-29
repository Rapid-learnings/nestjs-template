import { HttpStatus } from '@nestjs/common';

export default class HttpResponse {
  public readonly data: any;
  public readonly statusCode: number;
  public readonly message: string;

  constructor(data?: any, statusCode = HttpStatus.OK, message = 'success') {
    if (data && !(data instanceof Object)) {
      throw new Error('data should be type of Object!');
    }

    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
