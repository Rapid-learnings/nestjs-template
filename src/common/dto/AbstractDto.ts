import { AbstractEntity } from '../abstract.entity';


/**
 * @category `DTO`
 * @author Afzal Mansuri
 * @desciption This dto used to interact with api endpints.
 */
export class AbstractDto {
  /**
   * Abstract id
   */
  id: string;

  /**
   * time when abstract created
   */
  createdAt: Date;

  /**
   * time when abstract updated
   */
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
