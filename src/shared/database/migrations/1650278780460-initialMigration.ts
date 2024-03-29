import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * @group migration
 * @description  Runs a query for user table whenever this migration called or executed
 */
export class initialMigration1650278780460 implements MigrationInterface {
  name = 'initialMigration1650278780460';

  
  /**
   * Will create `users` table in database
   * @param queryRunner 
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying, "lastName" character varying, "role" integer NOT NULL DEFAULT '0', "email" character varying, "password" character varying, "phone" character varying, "avatar" character varying, "city" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  /**
   * will drop `users` database table from the database
   * @param queryRunner 
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
