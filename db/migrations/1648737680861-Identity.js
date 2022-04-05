module.exports = class Identity1648737680861 {
  name = 'Identity1648737680861'

  async up(db) {
    await db.query(`CREATE TABLE "identity" ("id" character varying NOT NULL, "web" text, "riot" text, "email" text, "image" text, "legal" text, "display" text, "twitter" text, "pgp_fingerprint" text, CONSTRAINT "PK_ff16a44186b286d5e626178f726" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "identity_id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_ff3623f6775193bb2a7286c2e8" ON "account" ("identity_id") `)
    await db.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_ff3623f6775193bb2a7286c2e81" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "identity"`)
    await db.query(`DROP TABLE "account"`)
    await db.query(`DROP INDEX "public"."IDX_ff3623f6775193bb2a7286c2e8"`)
    await db.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_ff3623f6775193bb2a7286c2e81"`)
  }
}
