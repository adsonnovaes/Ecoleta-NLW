import Knex from 'knex';


// Criar a tabela
export async function up(knex: Knex){
    // dentro de create table recebo as referencias com o nome da tabela e a função "table", nela contendo os campos que assim desejo criar; 
    return knex.schema.createTable('point_items', table =>{
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points');
        table.integer('item_id').notNullable().references('id').inTable('items');

    })
    
}

// Voltar a atrás, deletar a tabela, corrigir...
export async function down(knex:Knex){
    return knex.schema.dropTable('point_items');

}