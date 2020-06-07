import express, { response, request } from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import {errors} from 'celebrate';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);


// rota: endereço completo da requisição
// Recurso: qual entidade estamos acessando do sistema
// Get: Buscar uma ou mais informações do back-end
// Post: Criar uma nova informação no back-end
// Put: atualizar uma informação existente no back-end
// Delete: Remover uma informação no back-end
// Comando para iniciar o servidor: npm run dev
// instalando o knex: npm install knex

// Tipos de parametros:
// request param: parametros que vem na própria rota que identificam um recurso;
// Query param:são parametros que não são necessáriamente obrigatorios, 
// ex:um filtro de pesquisa, paginação
// Request body: Parâmetros para criação/atualização de informações