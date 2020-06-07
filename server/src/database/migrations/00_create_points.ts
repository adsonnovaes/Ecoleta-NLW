import Knex from 'knex';


// Criar a tabela
export async function up(knex: Knex){
    // dentro de create table recebo as referencias com o nome da tabela e a função "table", nela contendo os campos que assim desejo criar; 
    return knex.schema.createTable('points', table =>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();

    })
    
}

// Voltar a atrás, deletar a tabela, corrigir...
export async function down(knex:Knex){
    return knex.schema.dropTable('points');

}