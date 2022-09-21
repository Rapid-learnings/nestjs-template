import { NotFoundException } from '@nestjs/common';

/**
 * It will return an error whenever user is not found from the database
 * @throws UserNotFoundException when every request fails to not find a user
 * @group exceptions
 */
export class UserNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('User not found', error);
  }
}
