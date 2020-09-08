import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("contact", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("surname").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable();
    table.string("adress").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropSchema("contact");
}
