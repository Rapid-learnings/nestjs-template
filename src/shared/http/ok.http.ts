import { HttpStatus } from '@nestjs/common';

import { Success } from './message.http';
import HttpResponse from './response.http';

export default class HttpOkResponse extends HttpResponse {
  constructor(data?: any) {
    super(data, HttpStatus.OK, Success);
  }
}
