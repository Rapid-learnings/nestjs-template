import { HttpStatus } from '@nestjs/common';

/**
 * @group http
 * generates response with message and status code
 */
export default class HttpResponse {
  public readonly data: any;
  public readonly statusCode: number;
  public readonly message: string;

  /**
   * Assigning values to http response on http request successfull 
   * @param data 
   * @param statusCode 
   * @param message 
   */
  constructor(data?: any, statusCode = HttpStatus.OK, message = 'success') {
    if (data && !(data instanceof Object)) {
      throw new Error('data should be type of Object!');
    }

    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
