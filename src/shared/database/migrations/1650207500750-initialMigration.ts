import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1650207500750 implements MigrationInterface {
  name = 'initialMigration1650207500750';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "first_name"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_name"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "firstName" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "lastName" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "last_name" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "first_name" character varying`,
    );
  }
}
