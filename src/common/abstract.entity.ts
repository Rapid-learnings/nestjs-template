import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UtilsService } from '../shared/providers/utils.service';
import { AbstractDto } from './dto/AbstractDto';


/**
 * @schema `schema` for `Abstarct`
 */
export abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
  /**
   * @event id This id will be generated automatically when any activity done with this schema
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Time of the user created.
   */
  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'created_at',
  })
  createdAt: Date;

  /**
   * Time when user will be updated at.
   */
  @UpdateDateColumn({
    type: 'timestamp without time zone',
    name: 'updated_at',
  })
  updatedAt: Date;

  /**
   * Abstraction of `dtoClass`
   */
  abstract dtoClass: new (entity: AbstractEntity, options?: any) => T;

  /**
   * convert entity to dto class instance
   * @param options
   * @returns {array | object}
   */
  toDto(options?: any) {
    return UtilsService.toDto(this.dtoClass, this, options);
  }
}
