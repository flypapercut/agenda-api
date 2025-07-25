import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("appointments", (table) => {
    table.text("id").primary(),
    table.text("title").notNullable(),
    table.text("description"),
    table.text("date").notNullable(),
    table.text("time"),
    table.timestamp("created_at").defaultTo(knex.fn.now()),
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("appointments")
}

