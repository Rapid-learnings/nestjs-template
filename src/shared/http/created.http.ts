import { HttpStatus } from '@nestjs/common';

import { Success } from './message.http';
import HttpResponse from './response.http';


/**
 * This will create http response
 * @category http
 */
export default class HttpCreatedResponse extends HttpResponse {
  constructor(data?: any) {
    super(data, HttpStatus.CREATED, Success);
  }
}
