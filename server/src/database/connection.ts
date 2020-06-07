import knex from 'knex';
import path from 'path';

// resolve(): faz uma especie de padronização de caminho com os argumnetos passados
// __dirname: variavel global, que vai retornar o diretorio do arquivo que a gente está executando;
// migrations: Histórico do banco de dados


const connection = knex(
    {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'database.sqlite'),
        },

        useNullAsDefault: true,
    });

export default connection;


