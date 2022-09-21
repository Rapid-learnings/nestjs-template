import { AbstractEntity } from '../abstract.entity';


/**
 * @category `DTO`
 * @desciption This dto used to interact with api endpints.
 */
export class AbstractDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  /**
   * {@inheritDoc AbstractEntity}
   * @param entity This value inherits `AbstractEntity` for using it's properties into constructor.
   */
  constructor(entity: AbstractEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
