import {MigrationInterface, QueryRunner} from "typeorm";

export class Resident1631747296329 implements MigrationInterface {
    name = 'Resident1631747296329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "family" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "kk" integer NOT NULL, "validUntil" TIMESTAMP NOT NULL, CONSTRAINT "UQ_ef2ea6dec805502e8ce8cf7dea2" UNIQUE ("kk"), CONSTRAINT "PK_ba386a5a59c3de8593cda4e5626" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resident" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "familyId" integer NOT NULL, "nik" integer NOT NULL, "name" character varying(64) NOT NULL, "place_dateOfBirth" character varying(64) NOT NULL, "gender" character(1) NOT NULL, "bloodType" character(3) NOT NULL DEFAULT '-', "address" character varying(64) NOT NULL DEFAULT 'KP. DOMAS', "rt" integer NOT NULL, "rw" integer NOT NULL, "districts" character varying(64) NOT NULL DEFAULT 'PONTANG', "village" character varying(64) NOT NULL DEFAULT 'DOMAS', "religion" character varying(32) NOT NULL DEFAULT 'ISLAM', "maritalStatus" character varying(64) NOT NULL, "profession" character varying(64) NOT NULL, "citizenship" character(64) NOT NULL DEFAULT 'WNI', "validUntil" character varying(64) NOT NULL DEFAULT 'SEUMUR HIDUP', CONSTRAINT "UQ_e372938e3477c1b028d71e667f5" UNIQUE ("nik"), CONSTRAINT "PK_f1a321823d6f69d0e348535fd37" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "resident"`);
        await queryRunner.query(`DROP TABLE "family"`);
    }

}
