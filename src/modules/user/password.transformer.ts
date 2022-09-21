import { ValueTransformer } from 'typeorm';

import { UtilsService } from '../../shared/providers/utils.service';

/**
 * Transform a string password to hash value
 * @author Afzal Mansuri
 */
export class PasswordTransformer implements ValueTransformer {
  to(value) {
    return UtilsService.generateHash(value);
  }
  from(value) {
    return value;
  }
}
