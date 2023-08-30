import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1693364552298 implements MigrationInterface {
    name = 'Migrations1693364552298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`description\` varchar(500) NOT NULL, \`person\` int NOT NULL COMMENT 'Should be connect with person_id', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`todo\``);
    }

}
