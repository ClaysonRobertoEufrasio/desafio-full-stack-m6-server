import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1679604025716 implements MigrationInterface {
    name = 'createTables1679604025716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
