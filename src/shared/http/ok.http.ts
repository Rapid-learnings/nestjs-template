import { HttpStatus } from '@nestjs/common';

import { Success } from './message.http';
import HttpResponse from './response.http';

/**
 * It will generate http ok response
 * @event Success
 * @group http
 */
export default class HttpOkResponse extends HttpResponse {
  constructor(data?: any) {
    super(data, HttpStatus.OK, Success);
  }
}
