import { ValueTransformer } from 'typeorm';

import { UtilsService } from '../../shared/providers/utils.service';

/**
 * Transform a string password to hash value
 */
export class PasswordTransformer implements ValueTransformer {
  to(value) {
    return UtilsService.generateHash(value);
  }
  from(value) {
    return value;
  }
}
